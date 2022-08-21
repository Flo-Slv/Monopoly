import { gql } from '@apollo/client';

export const GET_ME = gql`
	query GetMe {
		getMe {
			_id
			email
			username
			createdAt
			urlAvatar
			hasCurrentGame
			currentGame
		}
	}
`;
