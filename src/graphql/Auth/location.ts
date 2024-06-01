import { gql } from '@apollo/client';

const GetLocations = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;
export default GetLocations;
