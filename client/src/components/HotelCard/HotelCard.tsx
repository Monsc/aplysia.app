import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export interface HotelCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  imageUrl: string;
  location: string;
}

const HotelCard: React.FC<HotelCardProps> = ({
  id,
  name,
  description,
  price,
  rating,
  imageUrl,
  location,
}) => {
  return (
    <CardContainer to={`/hotel/${id}`}>
      <ImageContainer>
        <Image src={imageUrl} alt={name} />
        <PriceTag>${price} / night</PriceTag>
      </ImageContainer>
      <ContentContainer>
        <Header>
          <Title>{name}</Title>
          <Rating>★ {rating.toFixed(1)}</Rating>
        </Header>
        <Location>{location}</Location>
        <Description>{description}</Description>
      </ContentContainer>
    </CardContainer>
  );
};

const CardContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  background: white;
  text-decoration: none;
  color: inherit;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const PriceTag = styled.div`
  position: absolute;
  bottom: 12px;
  right: 12px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-weight: 600;
  font-size: 14px;
`;

const ContentContainer = styled.div`
  padding: 16px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
`;

const Rating = styled.div`
  color: #ffd700;
  font-weight: 600;
`;

const Location = styled.div`
  color: #666;
  font-size: 14px;
  margin-bottom: 8px;
`;

const Description = styled.p`
  margin: 0;
  font-size: 14px;
  color: #444;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default HotelCard; 