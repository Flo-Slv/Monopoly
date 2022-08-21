import { gql } from '@apollo/client';

export const ADD_GAME = gql`
	mutation AddGame {
		addGame {
			createdAt
		}
	}
`;
