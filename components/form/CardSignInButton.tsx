import { SignInButton } from '@clerk/nextjs'
import { Button } from '../ui/button'
import { FaRegHeart } from 'react-icons/fa'
import { FaHeart } from 'react-icons/fa6'


function CardSignInButton() {
  return (
    <SignInButton mode='modal'>
        <Button 
        type='button'
        size={'icon'}
        variant={'outline'}
        className='p-2 couser-pointer'
        >
            <FaRegHeart />
        </Button>
    </SignInButton>
  )
}

export default CardSignInButton