'use client'
import React from 'react'
import { useFormStatus } from 'react-dom'
import { Button } from '../ui/button'
import { Loader2 } from 'lucide-react'
import { FaHeart, FaRegHeart } from 'react-icons/fa6'



function CardSubmitButton({isFavorit}:{isFavorit:boolean}) {

    const {pending} = useFormStatus()

return (
    <Button 
    className='p-2 cursor-pointer'
    type='submit'
    disabled={pending}
    size={'icon'}
    >
        { pending ? (
            <Loader2 className='h-4 w-4 animate-spin'> </Loader2>
        ) : isFavorit ? (
            <FaHeart />
        ) : (
            <FaRegHeart />
        )}
    </Button>    
  )
}

export default CardSubmitButton