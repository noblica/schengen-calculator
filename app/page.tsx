import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { SignOutButton } from './components/SignOutButton';
import Image from 'next/image';
import { authOptions } from './authOptions';

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect("/signin")
  }

  return (
    <>
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex gap-10 items-center w-full justify-between lg:justify-end my-2 px-4">
            {session?.user?.image && (<Image className="rounded-full" src={session.user.image} alt="user avatar" width={40} height={40} />)}
            {!session?.user?.image && session?.user?.email && (<p className="text-sky-600">{session.user.email}</p>)}
            <SignOutButton />
          </div>
        </div>
      </header>
      <main className="flex min-h-screen flex-col items-center p-24">
        <h1>Hello from calculator!</h1>
        <h2>Your user id is {session.user.id}</h2>
      </main>
    </>
  )
}
