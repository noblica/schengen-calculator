"use client"

import { signOut } from "next-auth/react"

export const SignOutButton = () => {
  return (
    <button className="text-black hover:text-sky-600" onClick={() => signOut()}>Sign out</button>
  )
}