import { useUser } from '../../helpers/contexts/user';

import LeaveGameButton from './leaveGameButton';
import JoinGameButton from './joinGameButton';
import LaunchGameButton from './launchGameButton';

export const GameActionButtons = ({ game }) => {
  const { currentGame } = useUser();
  return (
    <>
      {currentGame && currentGame === game._id ? (
        <>
          <LeaveGameButton game={game} />
          <LaunchGameButton game={game} />
        </>
      ) : (
        <JoinGameButton game={game} />
      )}
    </>
  );
};
