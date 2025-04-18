import React, { useState } from 'react'
import styled from 'styled-components'
import { Text } from '../../components/GlobalStyles/PageStyles'
import Loader from '../../components/Loaders/Loader'
import SearchBar from '../../components/SearchBar/SearchBar'
import ListHeader from './ListHeader'
import ListItem from "./ListItem"
import { FormButton } from '../../components/GlobalStyles/FormStyles'
import { useMutation } from '@apollo/client'
import { DELETE_ROOM } from '../../graphql/mutations/roomMutations'
import { toast } from 'react-toastify'

const Container = styled.div`
    @media(max-width: 1000px){
        margin-top: 20px;
    }
`

const BatchOperations = styled.div`
    display: flex;
    gap: 10px;
    margin: 10px 0;
`

const RoomsList = (props) => {
    const [query, setQuery] = useState('')
    const [loading, setLoading] = useState(false)
    const [selectedRooms, setSelectedRooms] = useState([])
    const listHeaderItems = ['选择', '房间名称', "价格", '容纳人数', '添加时间', '状态', '操作']
    const itemProperties = ['select', 'name', 'price', 'occupancy', 'addedOn', 'status', 'actions']

    const [deleteRooms] = useMutation(DELETE_ROOM)

    let rooms = props.rooms.filter(r => {
        return r.name.toLowerCase().includes(query.toString().toLowerCase())
    })

    const handleBatchDelete = async () => {
        if (!selectedRooms.length) {
            toast.warning('请先选择要删除的房间')
            return
        }
        
        if (!window.confirm(`确定要删除选中的 ${selectedRooms.length} 个房间吗？`)) {
            return
        }

        setLoading(true)
        try {
            for (const roomId of selectedRooms) {
                await deleteRooms({
                    variables: { id: roomId }
                })
            }
            toast.success('批量删除成功')
            setSelectedRooms([])
        } catch (error) {
            toast.error('批量删除失败: ' + error.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <Container>
            <SearchBar
                query={query}
                setQuery={setQuery}
                placeholder="搜索房间..." />

            <BatchOperations>
                <FormButton 
                    onClick={handleBatchDelete}
                    disabled={!selectedRooms.length || loading}
                >
                    批量删除 ({selectedRooms.length})
                </FormButton>
            </BatchOperations>

            <ListHeader list={listHeaderItems} />
            {!loading ? rooms.map(room =>
                <ListItem 
                    key={room.id} 
                    data={room}
                    setRoomModal={props.setRoomModal}
                    setLoading={setLoading}
                    selected={selectedRooms.includes(room.id)}
                    onSelect={(selected) => {
                        if (selected) {
                            setSelectedRooms([...selectedRooms, room.id])
                        } else {
                            setSelectedRooms(selectedRooms.filter(id => id !== room.id))
                        }
                    }}
                    items={itemProperties} 
                />)
                : <Loader />}
            {rooms.length === 0 &&
                <Text className="small" style={{ textAlign: 'center', marginTop: '20px' }}>
                    暂无房间
                </Text>}
        </Container>
    )
}

export default RoomsList
