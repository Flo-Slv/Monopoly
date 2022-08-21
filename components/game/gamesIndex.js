import GameList from './gameList';
import AddGameButton from './addGameButton';

const GamesIndex = () => {
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
};

export default GamesIndex;
