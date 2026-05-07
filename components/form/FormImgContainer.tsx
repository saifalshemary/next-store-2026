'use client'
import { actionFunction } from '@/utils/types'
import { LucideUser2 } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import FormContainer from './FormContainer'
import FormImage from './FormImage'
import FormButton from './formButton'

type Props = {
    name: string,
    image: string,
    action: actionFunction,
    cheildren?: React.ReactNode,
    text?:string,
}

function FormImgContainer(Props: Props) {

    const { name, image, action, cheildren, text } = Props
    const [isFormVisiable,setIsFormVisiable] = useState(false)
    
    const userIcon= (
        <LucideUser2 className='w-24 h-24 bg-primary rounded-md text-white mb-4' />
    )

  return (
       <div>
           { image ? (
            <Image 
            src={image}
            alt={text || name}
            width={100}
            height={100}
            className='rounded-md object-cover mb-4 w-24 h-24'
            />
           ) : userIcon }

           <Button variant={'outline'} size={'sm'} onClick={()=>setIsFormVisiable((e)=>!e)}>
                {text}
           </Button>
           {isFormVisiable && (
            <div className='max-w-lg mt-4'>
                <FormContainer actions={action}>
                    {Props.cheildren}
                    <FormImage  name={'image'} />
                    <FormButton size='sm' className='mt-4'/>
                </FormContainer>
            </div>
           )}
       </div>
  )
}

export default FormImgContainer