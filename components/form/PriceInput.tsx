import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'

type Props = {
    defaultValue?:number
}
function priceInput({defaultValue}:Props) {
  return (
    <div className='mb-14'>
        <Label htmlFor='price' className='captialize mb-2 '>
            Price
        </Label>
        <Input 
        id='price'
        name='price'
        type='number'
        placeholder='Enter Price'
        required
        min={0}
        defaultValue={defaultValue || 100}
        />
        

    </div>
  )
}

export default priceInput