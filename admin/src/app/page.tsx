import Link from 'next/link';

export default function Home() {
  return (
    <main>
      Please Login to Continue: <Link href={'/login'}>Login</Link>
    </main>
  );
}
