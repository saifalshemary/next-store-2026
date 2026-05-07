import React, { Suspense } from 'react'
import {fetchPropertyAction} from '@/utils/actions'
import EmptyList from './EmptyList'
import PropertiesList from './PropertiesList'
import { PropertyCardProps } from '@/utils/types'
import SkeletonCard from '../card/SkeletonCard'


type Props={
  category:string,
  search:string
}


async function PropertiesContainer({category , search }:Props) {
  const properties:PropertyCardProps[] = await fetchPropertyAction({category,search})

  if(properties.length === 0) {
    return (
      <EmptyList 
      heading='no items in the list'
      message='try changing the search or category'
      btnText='back home'
      />)
  }

  return (
   
     <PropertiesList properties={properties}/>
   
  )
}

export default PropertiesContainer