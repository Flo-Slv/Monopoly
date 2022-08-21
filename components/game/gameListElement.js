import { useUser } from '../../helpers/contexts/user';
import Link from 'next/link';

import User from '../user/userListElement';

import LeaveGameButton from './leaveGameButton';
import JoinGameButton from './joinGameButton';

const GameListElement = ({ game }) => {
  const { currentGame } = useUser();

  return (
    <div>
      <hr />
      ID : {game._id}{' '}
      <Link href={`/games/${game._id}`}>
        <a>Link</a>
      </Link>
      <br />
      Partie créée le : {game.createdAt}
      {game.attendees.map((user, index) => (
        <User key={index} user={user} />
      ))}
      {currentGame && currentGame === game._id ? (
        <LeaveGameButton game={game} />
      ) : (
        <JoinGameButton game={game} />
      )}
    </div>
  );
};

export default GameListElement;
