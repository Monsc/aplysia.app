import React, { useMemo } from 'react'
import styled from 'styled-components'
import ComponentError from '../../../components/Error/ComponentError';
import Loader from '../../../components/Loaders/Loader';
import { useQuery } from '@apollo/client';
import { GET_HOTEL_BOOKINGS } from '../../../graphql/queries/bookingQueries';
import { Text } from '../../../components/GlobalStyles/TableStyles';
import { Chart } from 'react-charts';

const CardContainer = styled.div`
    background: white;
    box-shadow: 2px 3px 7px 0px #66666682;
    border-radius: 6px;
    max-width: 100%;
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    height: 100%
`

const Block = styled.div`
    height: 100%;
    width: 100%;
    padding: 26px;
    border: 1px solid #e2e2e2;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;
    &:hover{
        box-shadow: 2px 3px 7px 0px #66666682;
    }
    h2{
        margin-bottom: 10px;
    }

    p {
        color: grey;
        font-size: 14px;
        text-align: center
    }
`

const ChartContainer = styled.div`
    height: 300px;
    margin: 20px;
`

const QuickStat = (props) => {
    const { hotel } = props
    const { data, loading, error } = useQuery(GET_HOTEL_BOOKINGS, { 
        variables: { id: hotel.id },
        pollInterval: 30000 // 每30秒更新一次数据
    })

    const getMonthlyStats = useMemo(() => {
        if (!data) return [];
        const monthlyData = {};
        data.getHotelBookings.forEach(booking => {
            const month = new Date(booking.from).getMonth();
            if (!monthlyData[month]) {
                monthlyData[month] = {
                    earnings: 0,
                    bookings: 0,
                    occupancyRate: 0
                };
            }
            if (booking.paid) {
                monthlyData[month].earnings += booking.amount;
            }
            monthlyData[month].bookings += 1;
        });

        // 计算每月入住率
        Object.keys(monthlyData).forEach(month => {
            const totalRoomDays = hotel.totalRooms * 30; // 假设每月30天
            const bookedDays = monthlyData[month].bookings * 
                             data.getHotelBookings.reduce((acc, cur) => 
                                 acc + (new Date(cur.to) - new Date(cur.from)) / (1000 * 60 * 60 * 24), 0);
            monthlyData[month].occupancyRate = (bookedDays / totalRoomDays) * 100;
        });

        return monthlyData;
    }, [data, hotel.totalRooms]);

    if (loading) return <Loader />
    if (error) return <ComponentError error={error} />

    const bookings = data.getHotelBookings;

    const getTotalEarnings = () => {
        let total = 0;
        bookings.forEach(b => {
            if (b.paid) total += b.amount
        })
        return total
    }

    const getTodayBookings = () => {
        let total = 0;
        const curDate = new Date().getDate();
        bookings.forEach(b => {
            if (new Date(b.from).getDate() === curDate) total++
        })
        return total
    }

    const getOccupancyRate = () => {
        const totalRooms = hotel.totalRooms;
        const occupiedRooms = bookings.filter(b => {
            const now = new Date();
            const checkIn = new Date(b.from);
            const checkOut = new Date(b.to);
            return now >= checkIn && now <= checkOut;
        }).length;
        return Math.round((occupiedRooms / totalRooms) * 100);
    }

    const chartData = [
        {
            label: '月收入',
            data: Object.entries(getMonthlyStats).map(([month, data]) => ({
                x: new Date(2024, month, 1),
                y: data.earnings
            }))
        },
        {
            label: '入住率',
            data: Object.entries(getMonthlyStats).map(([month, data]) => ({
                x: new Date(2024, month, 1),
                y: data.occupancyRate
            }))
        }
    ]

    return (
        <CardContainer>
            <Grid>
                <Block>
                    <h2><span style={{fontSize: '10px'}}>¥</span> {getTotalEarnings()}</h2>
                    <Text>总收入</Text>
                </Block>
                <Block onClick={() => props.setBookingsModal({ 
                    state: true, 
                    title: '所有预订', 
                    param: bookings 
                })}>
                    <h2>{bookings.length}</h2>
                    <Text>总预订数 (点击查看)</Text>
                </Block>
                <Block>
                    <h2>{hotel.rooms.length} / {hotel.totalRooms}</h2>
                    <Text>可用房间</Text>
                </Block>
                <Block>
                    <h2>{getTodayBookings()}</h2>
                    <Text>今日预订</Text>
                </Block>
                <Block>
                    <h2>{getOccupancyRate()}%</h2>
                    <Text>当前入住率</Text>
                </Block>
            </Grid>

            <ChartContainer>
                <Chart
                    options={{
                        data: chartData,
                        primaryAxis: { 
                            type: 'time',
                            position: 'bottom',
                            tickFormat: (value) => value.toLocaleDateString('zh-CN', { month: 'short' })
                        },
                        secondaryAxes: [
                            { 
                                type: 'linear',
                                position: 'left',
                                stacked: false
                            }
                        ],
                    }}
                />
            </ChartContainer>
        </CardContainer>
    )
}

export default QuickStat