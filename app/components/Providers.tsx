"use client"

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

export const Providers = (props: {children: ReactNode}) => (
  <SessionProvider>
    {props.children}
  </SessionProvider>
)