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
        color
      }
      chatbox {
        text
      }
      squares {
        _id
        label
        type
        group
        attendees {
          _id
          username
          urlAvatar
          color
        }
        prisoners {
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
