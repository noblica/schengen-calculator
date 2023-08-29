import { redirect } from "next/navigation";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { SignInButton } from "../components/SignInButton";

export const metadata: Metadata = {
  title: 'Signin | Schengen Calculator',
  description: 'Please sign in to calculate your remaining schengen days',
}

export default async function SignInPage() {
  const session = await getServerSession();

  if (session && session.user) {
    redirect("/")
  }

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <SignInButton />
        </div>
      </div>
    </>
  )
}
