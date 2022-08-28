import { useQuery } from '@apollo/client';
import { GET_GAME } from '../../helpers/graphql/queries/games/getGame';
import SquareCols from './board/squareCols';
import AttendeeList from './board/attendeeList';
import styles from './game.module.css';

export default function Game({ id }) {
  const { loading, error, data } = useQuery(GET_GAME, {
    variables: { _id: id },
  });

  if (loading) return 'Loading...';
  if (error) return `Error: ${error.message}`;

  return (
    <div className={styles.grid}>
      <SquareCols squares={data.getGame.squares} />
      <div className={styles.action}>
        Zone d action où on affiche le résultat du dé, de la carte tirée etc
      </div>
      <div className={styles.chatbox}>Chatbox</div>
      <AttendeeList className={styles.attendees} attendees={data.getGame.attendees} />
    </div>
  );
}
