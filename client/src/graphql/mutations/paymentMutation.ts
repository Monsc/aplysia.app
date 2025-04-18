import { gql } from '@apollo/client';

export const MAKE_PAYMENT = gql`
  mutation PayAmount($tokenId: ID!, $bookingId: ID!, $bookedBy: ID!) {
    payAmount(tokenId: $tokenId, bookingId: $bookingId, bookedBy: $bookedBy) {
      id
      paid
      paymentId
      paymentDate
      amount
      roomNumbers
    }
  }
`; 