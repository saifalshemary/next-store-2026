import FormButton from '@/components/form/formButton'
import FormContainer from '@/components/form/FormContainer'
import FormInput from '@/components/form/formInput'
import { createPropertyAction } from '@/utils/actions'
import PriceInput from '@/components/form/PriceInput'
import React from 'react'
import CategoryInput from '@/components/form/CategoryInput'
import TextareaInput from '@/components/form/Textarea'
import CountriesInput from '@/components/form/CountriesInput'
import FormImage from '@/components/form/FormImage'
import CounterInput from '@/components/form/counterInput'
import ServiceInput from '@/components/form/ServiceInput'


function CreateRantals() {
  return (
    <section>
        <h1 className='text-2xl my-4'>Create Rental</h1>
       <div className='border p-8 rounded-md'>
            <FormContainer actions={createPropertyAction}>
                 <div className='grid md:grid-cols-2 gap-8 mt-4'>

                     <FormInput type='text' name='name' label='Name'/>
                     <FormInput type='text' name='tagline' label='Tagline'/>
                     <PriceInput defaultValue={100}/>
                     <CategoryInput />

                 </div>
                 <TextareaInput 
                  name='description'
                  labelText='Description'/>
                 <div className='grid sm:grid-cols-2 gap-8 mt-4'>
                    <CountriesInput />
                    <FormImage name='image' />
                    <CounterInput details='bedrooms'/>
                    <CounterInput details='guests'/>
                    <CounterInput details='bathrooms'/>
                 </div>
                 <div className='mt-6'>
                    <h3 className='text-lg font-semibold mb-4'>Services</h3>
                    <ServiceInput />
                 </div>
                 
                 <FormButton text='Create Rental' className='mt-6'/>
             </FormContainer>
            </div>
    </section>
  )
}

export default CreateRantals