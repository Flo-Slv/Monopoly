import Header from '../../components/auth/header';
import Hello from '../../components/game/hello';
import Users from '../../components/user/users';
import Games from '../../components/game/games';
import AddGames from '../../components/game/addGame';

export default function Home() {
  return (
    <div>
      <Header />
      <Hello />
      <Users />
      <hr />
      <AddGames />
      <Games />
    </div>
  );
}
