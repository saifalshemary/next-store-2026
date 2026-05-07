import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'

type Props={
    name: string,

}

function FormImage({ name }: Props) {
  return (
    <div className='mt-2'>
        <Label htmlFor={name} className='captalize mb-2'>
            Image
        </Label>
        <Input
        id={name}
        name={name}
        type='file'
        accept='image/*'
        className='max-w-xs'
        required
        />
    </div>
  )
}

export default FormImage