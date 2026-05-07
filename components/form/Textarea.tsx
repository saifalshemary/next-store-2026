import React from 'react'
import { Label } from '../ui/label'
import { Textarea } from '../ui/textarea'


type Props ={
    name: string,
    labelText?:string,
    defaultValue?:string
}
function TextareaInput({name ,labelText , defaultValue }:Props) {
  return (
    <div className='mb-2'>
        <Label htmlFor={name} className='captalize mb-2' >
            {name}
        </Label>
        <Textarea
        id={name}
        name={name}
        defaultValue={defaultValue || ''}
        required
        className='leading-loose'
        />
    </div>
  )
}

export default TextareaInput