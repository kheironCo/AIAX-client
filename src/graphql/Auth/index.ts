import { gql } from '@apollo/client';

export const GET_LOCATION = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;
