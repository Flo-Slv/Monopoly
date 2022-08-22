import Link from 'next/link';

import User from '../user/userListElement';

import { GameActionButtons } from './gameActionButtons';

const GameListElement = ({ game }) => {
  return (
    <div>
      <hr />
      ID : {game._id}
      <br />
      Partie créée le : {game.createdAt}
      {game.attendees.map((user, index) => (
        <User key={index} user={user} />
      ))}
      {game.startTime ? (
        <Link href={`/games/${game._id}`}>
          <a>Partie en cours...</a>
        </Link>
      ) : (
        <GameActionButtons game={game} />
      )}
    </div>
  );
};

export default GameListElement;
