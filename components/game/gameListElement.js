import { useUser } from '../../helpers/contexts/user';
import LeaveGameButton from './leaveGameButton';
import JoinGameButton from './joinGameButton';
import User from '../user/user';

export default function GameListElement({ game }) {
  const { currentGame } = useUser();
  return (
    <div>
      <hr />
      Partie créée le : {game.createdAt}
      {game.attendees.map((user, index) => (
        <User key={index} user={user} />
      ))}
      {currentGame && currentGame === game.id ? (
        <LeaveGameButton game={game} />
      ) : (
        <JoinGameButton game={game} />
      )}
    </div>
  );
}
