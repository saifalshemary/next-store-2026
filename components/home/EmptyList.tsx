import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

function EmptyList(
  {
    heading='no items in the list',
    message='try changing the search or category',
    btnText='back home'
  }) {
  return (
   <div>
    <h1 className='text-2xl font-bold'>{heading}</h1>

    <p className='text-lg'>{message}</p>

    <Button asChild className='mt-4 captalize' size={'lg'}>
      <Link href={'/'}>
        {btnText}
      </Link>
      </Button>
   </div>
  )
}

export default EmptyList