import Link from 'next/link';
import User from './User';

export default function Header() {
  return (
    <header className="flex justify-between p-6 text-sm text-gray-700">
      <div className="flex space-x-4 items-center">
        <Link href="https://about.google.com">
          <a className="link">About</a>
        </Link>
        <Link href="https://store.google.com">
          <a className="link">Store</a>
        </Link>
      </div>
      <div className="flex space-x-4 items-center">
        <Link href="https://mail.google.com/mail">
          <a className="link">Gmail</a>
        </Link>
        <Link href="https://github.com/PauloRev/google-clone">
          <a className="link">Github</a>
        </Link>
        <User />
      </div>
    </header>
  );
}
