import React, { useState } from 'react';
import styled from 'styled-components';
import SearchBox, { SearchCriteria } from '../../components/SearchBox/SearchBox';
import HotelCard, { HotelCardProps } from '../../components/HotelCard/HotelCard';

// Mock data for demonstration - replace with actual API call
const mockHotels: HotelCardProps[] = [
  {
    id: '1',
    name: 'Luxury Ocean View Resort',
    description: 'Experience luxury living with breathtaking ocean views and world-class amenities.',
    price: 299,
    rating: 4.8,
    imageUrl: 'https://source.unsplash.com/random/800x600/?hotel,luxury',
    location: 'Miami Beach, FL',
  },
  {
    id: '2',
    name: 'Downtown Boutique Hotel',
    description: 'Charming boutique hotel in the heart of the city, walking distance to major attractions.',
    price: 199,
    rating: 4.5,
    imageUrl: 'https://source.unsplash.com/random/800x600/?hotel,boutique',
    location: 'New York, NY',
  },
  {
    id: '3',
    name: 'Mountain Lodge Retreat',
    description: 'Cozy mountain lodge perfect for nature lovers and outdoor enthusiasts.',
    price: 249,
    rating: 4.7,
    imageUrl: 'https://source.unsplash.com/random/800x600/?hotel,mountain',
    location: 'Aspen, CO',
  },
];

const ExplorePage: React.FC = () => {
  const [filteredHotels, setFilteredHotels] = useState(mockHotels);

  const handleSearch = (criteria: SearchCriteria) => {
    // Replace with actual API call and filtering logic
    console.log('Search criteria:', criteria);
    // For now, just simulate filtering by location
    const filtered = mockHotels.filter(hotel =>
      hotel.location.toLowerCase().includes(criteria.location.toLowerCase())
    );
    setFilteredHotels(filtered);
  };

  return (
    <PageContainer>
      <SearchSection>
        <SearchBox onSearch={handleSearch} />
      </SearchSection>
      
      <ResultsSection>
        <ResultsHeader>
          <ResultsCount>{filteredHotels.length} properties found</ResultsCount>
          <SortSelect>
            <option value="recommended">Recommended</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Rating</option>
          </SortSelect>
        </ResultsHeader>

        <HotelGrid>
          {filteredHotels.map(hotel => (
            <HotelCard key={hotel.id} {...hotel} />
          ))}
        </HotelGrid>
      </ResultsSection>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
`;

const SearchSection = styled.div`
  margin-bottom: 32px;
`;

const ResultsSection = styled.div``;

const ResultsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const ResultsCount = styled.h2`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
`;

const SortSelect = styled.select`
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  background: white;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #0066cc;
  }
`;

const HotelGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
`;

export default ExplorePage; 