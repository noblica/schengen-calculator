"use client"

import { signIn, useSession } from "next-auth/react";
import GoogleIcon from "../icons/GoogleIcon";
import { redirect } from "next/navigation";

export default function SignInPage() {
  const {data: session} = useSession();

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
          <button onClick={() => signIn("google")} type="button" className="text-white w-full bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center dark:focus:ring-[#4285F4]/55">
            <GoogleIcon />
            Sign in with Google
          </button>
        </div>
      </div>
    </>
  )
}
