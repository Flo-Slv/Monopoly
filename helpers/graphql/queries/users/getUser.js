import { gql } from '@apollo/client';

export const GET_USER = gql`
  query GetUser($_id: String) {
    getUser(_id: $_id) {
      _id
      email
      username
      createdAt
      urlAvatar
    }
  }
`;
