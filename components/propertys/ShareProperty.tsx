'use client'
import { Popover, PopoverTrigger, PopoverContent } from '../ui/popover'
import React from 'react'
import { Button } from '../ui/button'
import { LuShare2 } from 'react-icons/lu'
import {LinkedinIcon , LinkedinShareButton , FacebookShareButton, FacebookIcon} from 'react-share'

function ShareProperty({propertyId}:{propertyId:string}) {
  const url = "http://localhosu:3000/";
  const shareLink = `${url}properties/${propertyId}`
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button><LuShare2/>Share</Button>
      </PopoverTrigger>
      <PopoverContent
        align='center'
        side='left'
        sideOffset={10}
        className='flex items-center gap-x-2 p-2 w-full'>
        <LinkedinShareButton url={shareLink}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
        <FacebookShareButton url={shareLink}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
      </PopoverContent>
    </Popover>
  )
}

export default ShareProperty