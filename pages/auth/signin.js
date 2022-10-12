import Header from '../../components/Header';
import { getProviders, signIn } from 'next-auth/react';

export default function signin({ providers }) {
  return (
    <>
      <Header />
      <div className="mt-32">
        {Object.values(providers).map((provider) => (
          <div
            key={provider?.name}
            className="w-full flex flex-col items-center justify-center"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
              alt="logo"
              className="w-[300px] h-[100px] block mx-auto"
            />
            <p className="my-7 text-sm italic">
              This website is created for learning purposes
            </p>
            <button
              className="btnLogin max-w-[200px] w-full bg-[#db4437] text-white font-semibold py-2 px-4 rounded-[4px] shadow-sm"
              onClick={() => signIn(provider?.id, { callbackUrl: '/' })}
            >
              Sign in with {provider?.name}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}
