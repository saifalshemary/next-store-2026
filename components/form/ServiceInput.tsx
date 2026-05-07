'use client'

import { useState } from "react"
import { services ,Service } from "@/utils/servicees"
import { Checkbox } from "../ui/checkbox"


// services

function ServiceInput({defaultService}:{defaultService?: Service[]}) {
    const [selectedService, setselectedService] = useState<Service[]>(
        defaultService || services
    );

    const handelSeletedService = (selectedService: Service) => {
        setselectedService((prev: Service[]) =>{
            return prev.map((a)=>{
                if(a.name === selectedService.name){
                    return{...a,selected:!a.selected}
                }
                return a
                })
            })}


  return (
   <section>

    <input type="hidden" name="services" value={JSON.stringify(selectedService)}/>

    <div className="grid grid-cols-4 gap-4">
        {selectedService.map((ser)=>(
            <div key={ser.name} className="flex items-center gap-4">
            <Checkbox
            id={ser.name}
            checked={ser.selected}
            onCheckedChange={()=>handelSeletedService(ser)}
            />
            <label htmlFor={ser.name} className="flex items-center gap-4 ">
                <ser.icon className="w-5 h-5" />
                {ser.name}
            </label>
        </div>
        ))}

        
    </div>
   </section>
  )
}

export default ServiceInput