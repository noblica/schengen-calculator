import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from './api/auth/[...nextauth]/route';
import { UserHeader } from './components/UserHeader';

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect("/signin")
  }

  return (
    <>
      <header className="flex justify-end gap-4 bg-gradient-to-b from-white to-gray-200 shadow">
        <UserHeader />
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Hello from calculator!</h1>
      </main>
    </>
  )
}
