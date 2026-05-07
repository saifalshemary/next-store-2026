import { PropertyCardProps } from '@/utils/types'
import React from 'react'
import PropertyCard from '../card/PropertyCard'
import Link from 'next/link'



function PropertiesList({ properties }: {properties:PropertyCardProps[]}) {
  const {} = properties
  return (
    <section className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid:cols-4 gap-4 '>
      {properties.map((item)=>(
        <PropertyCard key={item.id} property={item} />
      ))}
    </section>
  )
}

export default PropertiesList