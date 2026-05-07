import React from 'react'
import { FaStar } from 'react-icons/fa6';

type Props={
  propertyId:string,
  inPage?:boolean,
}

function PropertyRating({propertyId,inPage}:Props) {
  const rating = 4.7;
  const count = 100;

  const className = `flex items-center ${inPage ? 'text-sm' : 'text-xs'}`;
  const countText = count > 1 ? `${count} reviews` : `${count} review`;
  const countValue = `(${count} ${inPage ? countText : ''})`

  
  return (
    <span className={className}>
      <FaStar className='w-3 h-3' />
      {rating} {countValue}
    </span>
  )
}

export default PropertyRating