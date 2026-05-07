'use client'
import { Card, CardHeader } from '../ui/card'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { LuMinus, LuPlus } from 'react-icons/lu'
import { useState } from 'react'

function CounterInput({details}:{details:string}) {

    const [count, setCount] = useState(0);

    const handleIncrement = ()=>{
        setCount((prev)=> prev + 1)
    }

    const handleDecement = ()=>{
        setCount((prev)=> prev > 0 ? prev - 1 : 0)
    }

  return (
    <Card>
        <Input type='hidden' name={details} value={count}/>

        <CardHeader className=' flex flex-cols gap-y-5'>
            <div className='flex items-center justify-between flex-wrap gap-x-5 w-full'>
                <div>
                    <h2>{details}</h2>
                    <p>
                        Please provide the {details} of the property.
                    </p>
                </div>
                <div className='flex items-center gap-4 '>
                    <Button 
                    variant={'outline'} 
                    size={'icon'}
                    onClick={handleDecement}
                    >
                        <LuMinus className='w-5 h-5 tsxt-primary' />
                    </Button>

                    <span className='text-lg font-bold text-center w-5'>
                        {count}
                    </span>
                    
                    <Button 
                    onClick={handleIncrement}
                    variant={'outline'} 
                    size={'icon'}
                    >
                        <LuPlus className='w-5 h-5 tsxt-primary'/>
                    </Button>

                </div>

            </div>
        </CardHeader>
    </Card>
  )
}

export default CounterInput