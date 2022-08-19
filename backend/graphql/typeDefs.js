import { gql } from 'apollo-server-micro';

const typeDefs = gql`
  type GameHistory {
    id: ID!
    attendees: [User]!
    winner: User!
    startTime: String!
    endTime: String!
  }

  type Resource {
    id: ID!
    startingMoney: Int
    luckyCards: [String]
    communityChestCards: [String]
    nbHostels: Int
    nbHouses: Int
    squares: [Square]
    jailCost: Int
  }

  type User {
    id: ID!
    username: String!
    email: String!
    createdAt: String
    urlAvatar: String
  }

  type Game {
    id: ID!
    createdAt: String
    attendees: [User]!
    chatbox: [Message]
    squares: [Square]
    startTime: String
    endTime: String
  }

  type Square {
    id: String
    label: String
    type: String
    group: String
    players: [User]
    owner: User
    nbHouses: Int
    nbHostels: Int
    mortgaged: Boolean
    monopoly: Boolean
  }

  type Message {
    player: User
    text: String
    time: String
  }

  input LoginInput {
    email: String!
  }

  #   input AddGameInput {
  #     createdAt: String!
  #   }

  type Query {
    getUsers: [User!]
    getUser(email: String!): User!
    getMe: User!
    getGamesHistory: [GameHistory!]
    getResources: Resource!
    getGame: Game!
    getGames: [Game!]
  }

  type Mutation {
    login(loginInput: LoginInput): User!
    addGame: Game
  }
`;

export default typeDefs;
