import { useQuery } from '@apollo/client';
import { GET_GAMES, JOIN_GAME, LEAVE_GAME } from '../../helpers/graphql/game';
import { useMutation } from '@apollo/client';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Link from 'next/link';
import styles from './games.module.css';
import { useUser } from '../../helpers/contexts/user';

export default function Games() {
  const { loading, error, data } = useQuery(GET_GAMES);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      <h2>Liste des parties</h2>
      <i>
        Tout fonctionne correctement mais le rafraîchissement de la page n est pas encore géré :
        plus tard avec des websockets pour quelque chose de fluides pour tous les joueurs
      </i>
      {data.getGames.map((game) => (
        <Game key={game.id} game={game} />
      ))}
    </div>
  );
}

function Game({ game }) {
  const { currentGame } = useUser();
  return (
    <div>
      <hr />
      Partie créée le : {game.createdAt}
      {game.attendees.map((player, index) => (
        <Player key={index} player={player} />
      ))}
      {currentGame && currentGame === game.id ? (
        <LeaveGame game={game} />
      ) : (
        <JoinGame game={game} />
      )}
    </div>
  );
}

function JoinGame({ game }) {
  const [joinGame, { data, loading, error }] = useMutation(JOIN_GAME);

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    joinGame({ variables: { id: game.id } });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Button type="submit">Rejoindre la partie</Button>
    </form>
  );
}

function LeaveGame({ game }) {
  const [leaveGame, { data, loading, error }] = useMutation(LEAVE_GAME);

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    leaveGame({ variables: { id: game.id } });
  };
  return (
    <form onSubmit={handleSubmit}>
      <Button type="submit">Quitter la partie</Button>
    </form>
  );
}

function Player({ player }) {
  console.log(player);
  return (
    <Link href={`/profile/${player.id}`}>
      <div className={styles.container}>
        <Avatar alt={player.username} src={player.urlAvatar} sx={{ width: 25, height: 25 }} />
        <div>
          <div>{player.username}</div>
        </div>
      </div>
    </Link>
  );
}
