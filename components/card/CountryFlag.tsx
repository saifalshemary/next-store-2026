import { getCountryByCode } from '@/utils/countries'
import React from 'react'

function CountryFlag({country}:{country:string}) {
  const validateCountry = getCountryByCode(country)
  const contryFlag = validateCountry?.flag
  const contryName = validateCountry?.name

  

  return (
    <span className='flex items-center gap-2 justifiy-between'>
      {contryFlag} {contryName}
    </span>
  )
}

export default CountryFlag