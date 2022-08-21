import { gql } from '@apollo/client';

export const LAUNCH_GAME = gql`
	mutation LaunchGame($_id: ID!) {
		launchGame(_id: $_id) {
			createdAt
		}
	}
`;
