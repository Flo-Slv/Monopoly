import { signIn, signOut, useSession } from "next-auth/react"

export default function Header() {
  const { data: session, status } = useSession()
  return (
    <nav>
      {!session?.user ? (
        <a
          href={`/api/auth/signin`}
          onClick={e => {
            e.preventDefault()
            signIn()
          }}
        >
          Se connecter
        </a>
      ) : (
        <a
          href={`/api/auth/signout`}
          onClick={e => {
            e.preventDefault()
            signOut()
          }}
        >
          Se déconnecter
        </a>
      )}
    </nav>
  )
}
