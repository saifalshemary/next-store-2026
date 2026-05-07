import React from 'react'
import { formatQuantity } from '@/utils/format'
type Props={
    details:{
        bedrooms:number;
        guests:number;
        bathrooms:number;
    }
}

function PropertyDetails({details:{bedrooms,guests,bathrooms}}:Props) {

  const spaces = [
    formatQuantity(bedrooms,'bedroom'),
    formatQuantity(guests,'guest'),
    formatQuantity(bathrooms,'bathroom'),
  ]
  return (
    <ul className='flex flex-wrap gap-2 ' area-label='Property spaces'>
      {spaces.map((space,index)=>(
        <li key={index}>
          <span className='inline-flex rounded-full border border-border bg-muted/60 px-2 py-1 text-sm  text-muted-foreground'>
            {space}</span>
        </li>
      ))}
    </ul>
  )
}

export default PropertyDetails