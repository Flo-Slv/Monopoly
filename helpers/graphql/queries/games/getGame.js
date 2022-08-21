import { gql } from '@apollo/client';

export const GET_GAME = gql`
	query GetGame($_id: ID!) {
		getUser(_id: $_id) {
			_id
			createdAt
			attendees {
				username
				urlAvatar
			}
			chatbox {
				text
			}
		}
	}
`;
