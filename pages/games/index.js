import Header from '../../components/auth/header';
import Hello from '../../components/game/hello';
import Users from '../../components/user/users';

export default function Home() {
  return (
    <div>
      <Header />
      <Hello />
      <Users />
    </div>
  );
}
