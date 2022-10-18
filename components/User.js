import { useSession, signIn, signOut } from 'next-auth/react';

export default function User({ className }) {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <img
          onClick={signOut}
          src={session.user?.image}
          alt="photo"
          className={`rounded-full h-10 w-10 shadow-sm hover:scale-105 transition-all delay-75 cursor-pointer hover:bg-gray-100 p-1 ${className}`}
        />
      </>
    );
  }

  return (
    <>
      <button
        className={`btnLogin max-w-[100px] w-full bg-[#4285f4] text-white font-semibold py-2 px-4 rounded-[4px] shadow-sm ${className}`}
        onClick={signIn}
      >
        Sign in
      </button>
    </>
  );
}
