

import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuSeparator } from '../ui/dropdown-menu'
import { Button } from '../ui/button'
import { FiAlignJustify } from 'react-icons/fi'
import { DropdownMenuItem } from '@radix-ui/react-dropdown-menu'
import { DropdownLinks } from '@/utils/links'

import Link from 'next/link'
import UserIcon from './userIcon'
import { SignedIn, SignedOut } from '@clerk/nextjs'

import { SignInButton, SignUpButton } from '@clerk/nextjs'
import SignOutLink from '../auth/sign-out-button'


function Dropdawn() {

  return (
    <DropdownMenu >
      <DropdownMenuTrigger asChild>
        <Button variant={'outline'} className='flex gap-6 max-w-[100px]'>
          <FiAlignJustify />
          <UserIcon />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent sideOffset={10} className='w-45  ' align='start'>

        <SignedOut >
          <DropdownMenuItem className='p-1'>
            <SignInButton mode='modal'>
              <Button className='w-full '>
                log In
              </Button>
            </SignInButton>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem className='p-1'>
            <SignUpButton mode='modal'>
              <Button variant={'outline'} className='w-full'>
                Sign In
              </Button>
            </SignUpButton>
          </DropdownMenuItem>

        </SignedOut>

        <SignedIn>
          {DropdownLinks.map((link) => {
            return (
              <DropdownMenuItem key={link.name} className='p-1'>
                <Link href={link.href} className='capitalize w-full ' > {link.name} </Link>
              </DropdownMenuItem>
            )
          })}

          <DropdownMenuSeparator />

          <DropdownMenuItem className='p-1'>
            <SignOutLink />
          </DropdownMenuItem>
        </SignedIn>

      </DropdownMenuContent>

    </DropdownMenu>
  )
}

export default Dropdawn