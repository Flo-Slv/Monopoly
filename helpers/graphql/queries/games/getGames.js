import { gql } from '@apollo/client';

export const GET_GAMES = gql`
  query GetGames {
    getGames {
      _id
      createdAt
      attendees {
        _id
        username
        urlAvatar
      }
      chatbox {
        text
      }
      startTime
    }
  }
`;
