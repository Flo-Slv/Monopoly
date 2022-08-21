import { gql } from '@apollo/client';

export const JOIN_GAME = gql`
	mutation JoinGame($_id: ID!) {
		joinGame(_id: $_id) {
			createdAt
		}
	}
`;
