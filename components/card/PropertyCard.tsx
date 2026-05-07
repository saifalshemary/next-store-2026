import { PropertyCardProps } from '@/utils/types'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { formatPrice } from '@/utils/format'
import PropertyRating from './PropertyRating'
import FavoriteToggleButton from './FavoriteToggleButton'
import CountryFlag from './CountryFlag'


function PropertyCard({ property }: { property: PropertyCardProps }) {
  const {image , id  ,country , name ,price ,tagline} = property
  const PropertyId= id
  return (
    <div className='group relative'>

      
        <div className='h-[300px] relative mb-2 overflow-hidden rounded-md '>
          {/* Fav heart */}
          <div className='absolute top-4 right-4 z-4'>
            <FavoriteToggleButton propertyId={PropertyId} />
          </div>
          <Image src={image} alt={name} fill className='object-cover group-hover:scale-110 transition-all duration-300'/>
        </div>
        
        <Link href={`/properties/${PropertyId}`}>
        <div className='flex justify-between items-center'>
          <h2 className='text-sm fount-semibold mt-1'> {name} </h2>
          <PropertyRating propertyId={PropertyId}/>
        </div>

        <div className='flex justify-between items-center mt-2'>
          <p className='text-sm mt-1'>
           {formatPrice(price)}
          </p>
          <CountryFlag country={country} />
        </div>

        
      </Link>
    </div>
  )
}

export default PropertyCard