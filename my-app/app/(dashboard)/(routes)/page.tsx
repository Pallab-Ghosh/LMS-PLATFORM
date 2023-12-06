import React from 'react'
import { UserButton } from "@clerk/nextjs";


export default function Routepage() {
  return (
    <div>
       <UserButton afterSignOutUrl="/"/>
    </div>
  )
}
