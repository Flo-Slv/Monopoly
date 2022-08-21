import { gql } from '@apollo/client';

export const LEAVE_GAME = gql`
	mutation LeaveGame($_id: ID!) {
		leaveGame(_id: $_id) {
			createdAt
		}
	}
`;
