import { getProviders, signIn } from 'next-auth/react';

import SignIn from '../../components/auth/signin';

export default function SignInPage({ providers }) {
  return <SignIn providers={providers} signInFunc={signIn} />;
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
