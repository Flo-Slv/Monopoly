import { gql } from '@apollo/client';

export const GET_GAMES = gql`
  query GetGames {
    getGames {
      id
      createdAt
      attendees {
        id
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

export const JOIN_GAME = gql`
  mutation JoinGame($id: ID!) {
    joinGame(id: $id) {
      createdAt
    }
  }
`;

export const LEAVE_GAME = gql`
  mutation LeaveGame($id: ID!) {
    leaveGame(id: $id) {
      createdAt
    }
  }
`;

export const LAUNCH_GAME = gql`
  mutation LaunchGame($id: ID!) {
    launchGame(id: $id) {
      createdAt
    }
  }
`;
