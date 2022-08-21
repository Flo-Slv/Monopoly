import Header from '../../components/auth/header';
import Hello from '../../components/user/hello';
import Users from '../../components/user/users';
import GameIndex from '../../components/game/gameIndex';

export default function Home() {
  return (
    <div>
      <Header />
      <Hello />
      <Users />
      <GameIndex />
    </div>
  );
}
