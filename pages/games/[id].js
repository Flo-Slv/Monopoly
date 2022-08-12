export default function Home() {
  const [idRoom, setIdRoom] = useState(null);
  const router = useRouter();

  useEffect(() => {
    setIdRoom(router.query.id);
  }, [router.query]);
  return <div>Bienvenue dans la partie id = {idRoom}</div>;
}
