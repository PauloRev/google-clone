import User from './User';

export default function Header() {
  return (
    <header className="flex justify-between p-6 text-sm text-gray-700">
      <div className="flex space-x-4 items-center">
        <a
          className="link text-sm no-underline hover:underline text-gray-700"
          href="https://github.com/PauloRev/google-clone"
          rel="noreferrer"
        >
          Github
        </a>
      </div>
      <div className="flex space-x-4 items-center">
        <a
          className="link text-sm no-underline hover:underline text-gray-700"
          href="https://mail.google.com/mail/&ogbl"
          rel="noreferrer"
        >
          Gmail
        </a>
        <User />
      </div>
    </header>
  );
}
