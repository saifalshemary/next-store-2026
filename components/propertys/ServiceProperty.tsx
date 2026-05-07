import React from 'react'
import { Service } from '@/utils/servicees'
import { LuFolderCheck } from 'react-icons/lu'

type props={
    service:string | undefined
}

function ServiceProperty({service}:props) {
    const amenitiesList:Service[] = JSON.parse(service as string)
    const noamenities = amenitiesList.every((serv)=> !serv.selected)
    if (noamenities){
        return null
    }

  return (
    <div className='mt-4'>
        <div className='grid md:grid-cols-2 gap-x-4'>
            {amenitiesList.map((serv)=>{
                if(!serv.selected){
                    return null
                }
            return (
                <div key={serv.name} className='flex items-center gap-x-4 mb-2'>
                    <LuFolderCheck className='text-primary w-6 h-6' />
                    <span className='font-light text-sm capitalize'>
                        {serv.name}
                    </span>
                </div>
            )
        })}
        </div>
    </div>
  )
}

export default ServiceProperty