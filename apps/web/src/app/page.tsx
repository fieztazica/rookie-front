import { auth } from '@/auth';
import { SignIn } from '@/components/sign-in';
import Link from 'next/link';
import {} from '@repo/db'

export default async function Page(): Promise<JSX.Element> {
  const session = await auth();
  console.log(session);
  if (!session)
    return (
      <main className="flex flex-col items-center justify-between min-h-screen p-24">
        <Link href="/api/auth/signin">Sign in</Link>
        <SignIn />
      </main>
    );

  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <Link href="/api/auth/signout">Sign out</Link>
      Hi, {session.user?.name}!
    </main>
  );
}
