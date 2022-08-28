import { gql } from 'apollo-server-micro';

const typeDefs = gql`
  type GameHistory {
    _id: ID!
    attendees: [User]!
    winner: User!
    startTime: String!
    endTime: String!
  }

  type Resource {
    _id: ID!
    startingMoney: Int
    luckyCards: [String]
    communityChestCards: [String]
    nbHostels: Int
    nbHouses: Int
    squares: [Square]
    jailCost: Int
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    createdAt: String
    urlAvatar: String
    hasCurrentGame: Boolean!
    currentGame: ID
  }

  type Game {
    _id: ID!
    createdAt: String
    attendees: [User!]!
    chatbox: [Message]
    squares: [Square]
    startTime: String
    endTime: String
  }

  type Square {
    _id: String
    label: String
    type: String
    group: String
    attendees: [User]
    prisoners: [User]
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

  input GameInput {
    _id: ID!
  }

  type Query {
    getUsers: [User!]
    getUser(email: String, _id: String): User!
    getMe: User!
    getGamesHistory: [GameHistory!]
    getResources: Resource!
    getGame(_id: String): Game!
    getGames: [Game!]
  }

  type Mutation {
    login(loginInput: LoginInput): User!
    addGame: Game!
    joinGame(_id: ID!): Game!
    leaveGame(_id: ID!): Game!
    launchGame(_id: ID!): Game!
  }
`;

export default typeDefs;
