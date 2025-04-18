import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface SearchBoxProps {
  onSearch: (criteria: SearchCriteria) => void;
}

export interface SearchCriteria {
  location: string;
  checkIn: Date | null;
  checkOut: Date | null;
  guests: number;
}

const SearchBox = ({ onSearch }: SearchBoxProps) => {
  const [criteria, setCriteria] = useState<SearchCriteria>({
    location: '',
    checkIn: null,
    checkOut: null,
    guests: 1,
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(criteria);
  };

  return (
    <SearchContainer>
      <SearchForm onSubmit={handleSearch}>
        <InputGroup>
          <Label>Location</Label>
          <Input
            type="text"
            placeholder="Where are you going?"
            value={criteria.location}
            onChange={(e) => setCriteria({ ...criteria, location: e.target.value })}
          />
        </InputGroup>

        <InputGroup>
          <Label>Check-in</Label>
          <DatePicker
            selected={criteria.checkIn}
            onChange={(date: Date | null) => setCriteria({ ...criteria, checkIn: date })}
            minDate={new Date()}
            placeholderText="Select check-in date"
          />
        </InputGroup>

        <InputGroup>
          <Label>Check-out</Label>
          <DatePicker
            selected={criteria.checkOut}
            onChange={(date: Date | null) => setCriteria({ ...criteria, checkOut: date })}
            minDate={criteria.checkIn || new Date()}
            placeholderText="Select check-out date"
          />
        </InputGroup>

        <InputGroup>
          <Label>Guests</Label>
          <Input
            type="number"
            min="1"
            value={criteria.guests}
            onChange={(e) => setCriteria({ ...criteria, guests: parseInt(e.target.value) })}
          />
        </InputGroup>

        <SearchButton type="submit">Search</SearchButton>
      </SearchForm>
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const SearchForm = styled.form`
  display: flex;
  gap: 20px;
  align-items: flex-end;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;

  .react-datepicker-wrapper {
    width: 100%;
  }
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #333;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  width: 100%;

  &:focus {
    outline: none;
    border-color: #0066cc;
  }
`;

const SearchButton = styled.button`
  background: #0066cc;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  height: 42px;

  &:hover {
    background: #0052a3;
  }
`;

export default SearchBox; 