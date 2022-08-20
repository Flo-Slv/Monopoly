import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query GetUsers {
    getUsers {
      id
      email
      username
      createdAt
      urlAvatar
    }
  }
`;

export const GET_USER = gql`
  query GetUser($email: String!) {
    getUser(email: $email) {
      id
      email
      username
      createdAt
      urlAvatar
    }
  }
`;

export const GET_ME = gql`
  query GetMe {
    getMe {
      id
      email
      username
      createdAt
      urlAvatar
      currentGame
    }
  }
`;
