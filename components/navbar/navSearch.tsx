'use client'
import React, { use, useState } from 'react'
import { Input } from '../ui/input'
import { useSearchParams ,usePathname , useRouter } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'




function NavSearch() {
  
  
const searchParams = useSearchParams();
const pathname = usePathname();
const {replace} = useRouter();
const [search , setSearch] = useState(
  searchParams.get('search') || ''
)

const handleSearch = useDebouncedCallback((value:string)=>{

  const params = new URLSearchParams(searchParams)
  if(value) {
    params.set('search',value)
  }else{
    params.delete('search')
  }
  replace(`${pathname}?${params.toString()}`)

},300);

  return (
    <Input
    value={search}
    type='search' placeholder='Search....' 
    className='max-w-xs dark:muted'
    onChange={(e)=>{
      setSearch(e.target.value)
      handleSearch(e.target.value)
    }}
    />
  )
}

export default NavSearch