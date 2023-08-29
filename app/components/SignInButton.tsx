"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import GoogleIcon from "../icons/GoogleIcon";
import Image from "next/image";

export const SignInButton = () => {
  const {data: session} = useSession();

  if (session && session.user) {
    return (
      <div className="flex gap-10 items-center justify-center ml-auto my-2 px-4">
        <div className="flex items-center justify-center gap-2">
          {session.user.image && (<Image className="rounded-full" src={session.user.image} alt="user avatar" width={40} height={40} />)}
          {!session.user.image && (<p className="text-sky-600">{session.user.email}</p>)}
        </div>
        <button className="text-black hover:text-sky-600" onClick={() => signOut()}>Sign out</button>
      </div>
    )
  }

  return (
    <div className="px-4 my-2 max-w-sm">
      <button onClick={() => signIn("google")} type="button" className="text-white w-full bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between dark:focus:ring-[#4285F4]/55">
        <GoogleIcon />
        Sign in with Google
      </button>
    </div>
  )
}