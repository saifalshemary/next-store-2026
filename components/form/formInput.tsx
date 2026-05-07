import React from 'react'
import { Label } from '../ui/label';
import { Input } from '../ui/input';
type FormInputProps = {
    name: string;
    type: string;
    placeholder?: string;
    defaultValue?: string;
    label?: string;
}

function FormInput({ name, type, placeholder, defaultValue, label }: FormInputProps) {
  return (
    <div className='mb-4'>
        <Label htmlFor={name} className='captialize mb-2 p-1'>
            {label} 
        </Label>

        <Input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        
        />
    </div>
  )
}

export default FormInput