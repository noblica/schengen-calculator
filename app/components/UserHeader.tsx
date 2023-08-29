"use client"

import { signOut, useSession } from "next-auth/react"
import Image from "next/image";

export const UserHeader = () => {
  const {data: session} = useSession();

  return (
    <div className="flex gap-10 items-center justify-center ml-auto my-2 px-4">
      <div className="flex items-center justify-center gap-2">
        {session?.user?.image && (<Image className="rounded-full" src={session.user.image} alt="user avatar" width={40} height={40} />)}
        {!session?.user?.image && session?.user?.email && (<p className="text-sky-600">{session.user.email}</p>)}
      </div>
      <button className="text-black hover:text-sky-600" onClick={() => signOut()}>Sign out</button>
    </div>
  )
}