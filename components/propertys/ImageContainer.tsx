import Image from 'next/image'
import React from 'react'

function ImageContainer({image, name}:{image:string, name:string}) {
  return (
    // <section className='h-[300px]  md:h-[450px] relative mt-8 mb-8'>
    //     <Image src={image} alt={name} fill className='object-cover rounded-md'/>
    // </section>
    <figure className='relative mt-6 aspect-21/9 min-h-[220px] w-full overflow-hidden rounded-xl border border-border bg-muted shadow-sm md:min-h-[320px]'>
      <Image 
      src={image} 
      alt={name} 
      fill
      sizes='(mix-width: 768px ) 100vw, min(1152px, 100vw)'
      className='object-cover'/>
      
    </figure>
  )
}

export default ImageContainer