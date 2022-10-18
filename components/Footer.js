import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center justify-center mt-32 mb-2">
      <p className="text-gray-700">
        Copyright &copy; {new Date().getFullYear()} - PhDev
      </p>
      <Link href="https://github.com/PauloRev/google-clone">
        <a className="link">Github Project</a>
      </Link>
    </footer>
  );
}
