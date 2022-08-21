import { gql } from '@apollo/client';

export const GET_USER = gql`
	query GetUser($email: String!) {
		getUser(email: $email) {
			_id
			email
			username
			createdAt
			urlAvatar
		}
	}
`;
