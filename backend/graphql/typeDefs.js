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
	}

	type User {
		id: ID!
		username: String!
		email: String!
		createdAt: String
		urlAvatar: String
	}

	input LoginInput {
		email: String!
	}

	type Query {
		getUsers: [User!]
		getUser(email: String!): User!
		getMe: User!
		getGamesHistory: [GameHistory!]
		getResources: Resource!
	}
	
	type Mutation {
		login(loginInput: LoginInput): User!
	}
`;

export default typeDefs;
