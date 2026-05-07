'use client'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { formatPrice } from '@/utils/format'
import React from 'react'
import { useState } from 'react'
import { DateRange } from 'react-day-picker'


function BookindCalnder({
  className,
  price,
}: {
  className?: string
  price: number
}) {
    const currentDate = new Date();
    const defaultSelected = {
        from : undefined,
        to : undefined,
    }
    const [range, setRange] = useState<DateRange | undefined>(defaultSelected)
       
    return (
    <Card className={cn('w-full border-border bg-background shadow-sm', className)}>
      <CardHeader className='pb-2'>
        <CardTitle className='flex items-end gap-2 text-base font-semibold'>
          <span className='text-2xl font-bold'>{formatPrice(price)}</span>
          <span className='text-muted-foreground text-sm font-normal'>/ night</span>
        </CardTitle>
        <p className='text-muted-foreground text-sm'>Select check-in and check-out dates</p>
      </CardHeader>

      <CardContent className='px-3'>
        <Calendar
          className={cn('w-full max-w-full rounded-lg border border-border bg-background p-2 [--cell-size:2.25rem]')}
          mode='range'
          selected={range}
          onSelect={setRange}
          defaultMonth={currentDate}
        />
      </CardContent>

      <CardFooter className='flex flex-col gap-2 pt-4'>
        <Button className='w-full' size='lg'>
          Continue to checkout
        </Button>
        <p className='text-muted-foreground text-xs'>You won&apos;t be charged yet</p>
      </CardFooter>
    </Card>

  )
}

export default BookindCalnder