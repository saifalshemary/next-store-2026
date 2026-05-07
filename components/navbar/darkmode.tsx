'use client'
import React from 'react'
import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuContent } from '../ui/dropdown-menu'
import { useTheme } from 'next-themes'
import { Button } from '../ui/button'
import { Moon, Sun } from 'lucide-react'

function Darkmode() {
  const { setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={'outline'} size={'icon'} className='relative p-1'>
            <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"/>
            <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"/>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent sideOffset={10} className='w-32  rounded-lg' align='start'>
          <DropdownMenuItem onClick={() => setTheme('light')}>light</DropdownMenuItem>
          <DropdownMenuItem onClick={()=> setTheme('dark')}>dark</DropdownMenuItem>
          <DropdownMenuItem onClick={()=> setTheme('system')}>system</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default Darkmode