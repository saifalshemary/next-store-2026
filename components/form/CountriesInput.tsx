import React from 'react'
import { Label } from '../ui/label'
import { Select , SelectContent , SelectItem,SelectValue , SelectTrigger} from '../ui/select'
import { formattedCountries } from '@/utils/countries'

type Props ={
    defaultValue?:string
}

const name ='country'

function CountriesInput({defaultValue}:Props) {

  return (
    <div className='mb-2'>
        <Label htmlFor={name} className='capitalize mb-2'>
            Country
        </Label>
        <Select
        defaultValue={defaultValue || formattedCountries[0].code}
        name={name}
        required
        >
            <SelectTrigger id={name}>
                <SelectValue placeholder='Select a country' />
            </SelectTrigger>
           
            <SelectContent>
                {formattedCountries.map((item)=>{
                    return (
                        <SelectItem key={item.code} value={item.code}>
                            <span className='flex items-center gap-2'>
                            <span className='font-mono uppercase'>{item.flag}</span>
                            <span>{item.name}</span>
                            </span>
                            
                        </SelectItem>
                    )
                })}
            </SelectContent>
        </Select> 
    </div>
  )
}

export default CountriesInput