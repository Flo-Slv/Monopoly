import Users from '../../components/user/userList';
import Header from '../../components/global/header';

export default function Home() {
  return (
    <>
      <Header />
      <h2>Liste des joueurs</h2>
      <Users />
    </>
  );
}
