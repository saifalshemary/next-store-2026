

import Link from 'next/link'
import React from 'react'
import { FaCampground } from 'react-icons/fa6'

function Logo() {
  return (
    <div>
      <Link href='/'>
        <FaCampground />
      </Link>
    </div>
  )
}

export default Logo