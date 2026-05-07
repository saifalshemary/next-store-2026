import React, { Suspense } from 'react'
import Logo from './logo'
import NavSearch from './navSearch'
import Darkmod from './darkmode'
import Dropdawn from './dropdawn'
import UserIcon from './userIcon'
import { divIcon } from 'leaflet'

function Navbar() {
  return (
    <nav className=' border-b'>
        <div className='container flex flex-col sm:flex-row sm:items-center sm:justify-between flex-wrap gap-4 py-6 '>
            <Logo />
            <Suspense
            fallback ={
              <div className='h-9 max-w-xs w-full animte-pulse rounded-md bg-muted'
              aria-hidden
              />
            }
            >
            <NavSearch />
            </Suspense>
            <div className='flex items-center gap-4 '>
                <Darkmod />

                <Dropdawn />
      
            </div>
        </div>
    </nav>
  )
}

export default Navbar