import Header from '../../components/auth/header';
import Hello from '../../components/games/hello';
import Users from '../../components/games/users';

export default function Home() {
  return (
    <div>
      <Header />
      <Hello />
      <Users />
    </div>
  );
}
