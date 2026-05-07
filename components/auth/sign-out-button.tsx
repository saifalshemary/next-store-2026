'use client'
import { SignOutButton } from '@clerk/nextjs'
import React from 'react'
import { Button } from '../ui/button'

import { toast } from 'sonner'

function SignOutLink() {
    const handleSignOut = () => {
        toast("Signed out successfully")
    }
  return (

   <SignOutButton redirectUrl='/'>
        <Button className='w-full' variant={'destructive'} onClick={handleSignOut}>
            Log Out
        </Button>
   </SignOutButton>
  )
}

export default SignOutLink