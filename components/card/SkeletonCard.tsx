import React from 'react'
import { Skeleton } from '../ui/skeleton'

function SkeletonCard() {
  return (
   <div>
    <Skeleton className='h-[300px] rounded-md mt-4'/>
    <Skeleton className='h-4 w-3/4 mt-4'/>
    <Skeleton className='h-4 w-1/2 mt-4'/>
   </div>
  )
}

export default SkeletonCard