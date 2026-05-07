import React from 'react'
import { ScrollArea } from '../ui/scroll-area'
import { categories } from '@/utils/CategoryLable'
import Link from 'next/link'

type Props={
  search:string,
  category:string
}

function CategoriesList({search,category}:Props) {
  const searchTerm = search? `&search=${search}`:"";
  return (
    <section>
      <ScrollArea >
      <div className='flex gap-x-4'>
        {categories.map((item)=>{
          const isActive = category === item.label
          return(
            <Link href={`/?category=${item.label}${searchTerm}`} key={item.label}>
              <article className= 'p-3 flex flex-col items-center cursor-pointer hover:text-primary transition'>

                <item.icon/>
                <p className='capitalize text-sm mt-1'>{item.label}</p>

              </article>
              </Link>
          )
        })}

      </div>
      </ScrollArea>
      
    </section>
  )
}

export default CategoriesList
