import { useQuery } from '@apollo/client';
import { style } from '@mui/system';
import { GET_GAME } from '../../helpers/graphql/queries/games/getGame';
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
        <div className={styles.square}>
          <div className={styles.title}>
            Rue de la paix
            <div className={styles.owner}>
              <div className={styles.avatar}>F</div>
            </div>
          </div>
          <div className={styles.players}>
            <div className={styles.avatar}>M</div>
            {/* <MapsHomeWorkOutlinedIcon /> */}
          </div>
        </div>

        <div className={styles.square}>
          <div className={styles.title}>
            Avenue des Champs Elysées
            <div className={styles.owner}>
              <div className={styles.avatar}>F</div>
            </div>
          </div>
          <div className={styles.players}>
            <div className={styles.avatar}>M</div>
            {/* <HomeOutlinedIcon /> */}
          </div>
        </div>

        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>

        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>

        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>

        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>

        <div className={styles.action}>
          Zone d action où on affiche le résultat du dé, de la carte tirée etc
        </div>
        <div className={styles.chatbox}>Chatbox</div>
        <div className={styles.attendees}>
          Infos joueurs (argent, possession carte sortie de prison)
        </div>
      </div>
    </div>
  );
}
