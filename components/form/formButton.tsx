'use client'
import React from 'react'
import { Button } from '../ui/button'
import { useFormStatus } from 'react-dom'
import { Loader2 } from 'lucide-react'

type FormButtonProps = {
    text?: String,
    className?: String,
    size?: 'default' | 'sm' | 'lg'
}

function formButton({ text='submit', className='', size='default' }: FormButtonProps) {

    const {pending} = useFormStatus()

  return (
    <Button
    type='submit'
    className={`capitalize ${className}`}
    disabled={pending}
    size={size}
    >
        {pending ? (
            <> <Loader2  className='h-4 w-4 animate-spin '/> Please wait....</>
        )
        : (
            text
        )}

    </Button>
  )
}

export default formButton