import { getProviders, signIn } from "next-auth/react"
import Image from "next/image"
import backgroundImage from "../../public/authBackground.jpg"
import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"

export default function SignIn({ providers }) {
  return (
    <div className="authContainer">
      <div className="authBackground">
        <Image alt="" src={backgroundImage} placeholder="blur" layout="fill" objectFit="cover" />
      </div>
      <div className="authForm">
        <h1>Monopoly</h1>
        <h2>Démarrer une partie</h2>
        {Object.values(providers).map(provider => (
          <div key={provider.name}>
            <Button onClick={() => signIn(provider.id, { callbackUrl: "http://localhost:3000/" })} variant="contained">
              Sign in with {provider.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}
