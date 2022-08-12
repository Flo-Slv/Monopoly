import { gql } from 'apollo-server-micro';

const typeDefs = gql`
	type GameHistory {
		id: ID!
		attendees: [User]!
		winner: User!
		startTime: String!
		endTime: String!
	}

	type User {
		id: ID!
		username: String!
		email: String!
		createdAt: String!
		urlAvatar: String
	}

	input RegisterInput {
		email: String!
	}
	
	input LoginInput {
		email: String!
	}

	type Query {
		getUsers: [User]
		getUser(email: String!): User!
		getGamesHistory: [GameHistory]
	}
	
	type Mutation {
		register(registerInput: RegisterInput): User!
		login(loginInput: LoginInput): User!
	}
`;

export default typeDefs;
