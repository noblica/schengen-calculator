"use client"

import { signIn } from "next-auth/react"
import GoogleIcon from "../icons/GoogleIcon"

export const SignInButton = () => {
  return (
  <button onClick={() => signIn("google")} type="button" className="text-white w-full bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center dark:focus:ring-[#4285F4]/55">
    <GoogleIcon />
    Sign in with Google
  </button>
  )
}