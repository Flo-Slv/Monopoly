import Hello from '../../components/user/hello';
import GamesIndex from '../../components/game/gamesIndex';
import Header from '../../components/global/header';

export default function Home() {
  return (
    <>
      <Header />
      <Hello />
      <GamesIndex />
    </>
  );
}
