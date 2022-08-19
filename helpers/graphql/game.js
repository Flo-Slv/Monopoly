import { gql } from '@apollo/client';

export const GET_GAMES = gql`
  query GetGames {
    getGames {
      id
      createdAt
      attendees {
        username
        urlAvatar
      }
      chatbox {
        text
      }
    }
  }
`;

export const GET_GAME = gql`
  query GetGame($id: ID!) {
    getUser(id: $id) {
      id
      createdAt
      attendees {
        username
        urlAvatar
      }
      chatbox {
        text
      }
    }
  }
`;

export const ADD_GAME = gql`
  mutation AddGame {
    addGame {
      createdAt
    }
  }
`;
