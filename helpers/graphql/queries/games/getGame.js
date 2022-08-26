import { gql } from '@apollo/client';

export const GET_GAME = gql`
  query GetGame($_id: String!) {
    getGame(_id: $_id) {
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
      squares {
        _id
        label
        type
        group
        players {
          _id
          username
          urlAvatar
        }
        # owner {
        #   _id
        #   username
        #   urlAvatar
        # }
        nbHouses
        nbHostels
        mortgaged
        monopoly
      }
    }
  }
`;
