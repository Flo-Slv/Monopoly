import GameList from './gameList';
import AddGameButton from '../../components/game/addGameButton';

export default function GameIndex() {
  return (
    <div>
      <hr />
      <AddGameButton />
      <h2>Liste des parties</h2>
      <i>
        Tout fonctionne correctement mais le rafraîchissement de la page n est pas encore géré :
        plus tard avec des websockets pour quelque chose de fluides pour tous les joueurs
      </i>
      <GameList />
    </div>
  );
}
