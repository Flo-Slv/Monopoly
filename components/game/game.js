import { useQuery } from '@apollo/client';
import { style } from '@mui/system';
import { GET_GAME } from '../../helpers/graphql/queries/games/getGame';
import Avatar from '@mui/material/Avatar';
// import { HomeOutlinedIcon, MapsHomeWorkOutlinedIcon } from '@mui/icons-material';

import styles from './game.module.css';

export default function Game({ id }) {
  const { loading, error, data } = useQuery(GET_GAME, {
    variables: { _id: id },
  });

  if (loading) return 'Loading...';
  if (error) return `Error: ${error.message}`;

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {/* <h2>Page game id {data.getGame._id}</h2> */}
        {data.getGame.squares.map((square) => (
          <div key={square._id} className={styles.square}>
            <div className={styles.title}>
              {square.label}
              <div className={styles.owner}>{/* <div className={styles.avatar}>F</div> */}</div>
            </div>
            <div className={styles.players}>
              {/* <div className={styles.avatar}>M</div> */}
              {/* <MapsHomeWorkOutlinedIcon /> */}
            </div>
          </div>
        ))}

        <div className={styles.action}>
          Zone d action où on affiche le résultat du dé, de la carte tirée etc
        </div>
        <div className={styles.chatbox}>Chatbox</div>
        <div className={styles.attendees}>
          {data.getGame.attendees.map((attendee) => (
            <>
              <div key={attendee._id} className={styles.attendee}>
                <Avatar alt={attendee.username} src={attendee.urlAvatar} />
                {attendee.username}
                <div className={styles.money}>500€</div>
              </div>
              <div key={attendee._id + 'ff'} className={styles.attendee}>
                <Avatar alt={attendee.username} src={attendee.urlAvatar} />
                {attendee.username}
                <div className={styles.money}>500€</div>
              </div>
              <div key={attendee._id + 'ff'} className={styles.attendee}>
                <Avatar alt={attendee.username} src={attendee.urlAvatar} />
                {attendee.username}
                <div className={styles.money}>500€</div>
              </div>
              <div key={attendee._id + 'ff'} className={styles.attendee}>
                <Avatar alt={attendee.username} src={attendee.urlAvatar} />
                {attendee.username}
                <div className={styles.money}>500€</div>
              </div>
              <div key={attendee._id + 'ff'} className={styles.attendee}>
                <Avatar alt={attendee.username} src={attendee.urlAvatar} />
                {attendee.username}
                <div className={styles.money}>500€</div>
              </div>
              <div key={attendee._id + 'ff'} className={styles.attendee}>
                <Avatar alt={attendee.username} src={attendee.urlAvatar} />
                {attendee.username}
                <div className={styles.money}>500€</div>
              </div>
              <div key={attendee._id + 'ff'} className={styles.attendee}>
                <Avatar alt={attendee.username} src={attendee.urlAvatar} />
                {attendee.username}
                <div className={styles.money}>500€</div>
              </div>
              <div key={attendee._id + 'ff'} className={styles.attendee}>
                <Avatar alt={attendee.username} src={attendee.urlAvatar} />
                {attendee.username}
                <div className={styles.money}>500€</div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
