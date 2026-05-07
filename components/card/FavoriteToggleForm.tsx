import React from 'react'
import { Button } from '../ui/button'
import { FaRegHeart } from 'react-icons/fa'
import FormContainer from '../form/FormContainer'
import { toggleFavoritAction } from '@/utils/actions'
import CardSubmitButton from '../form/Buttons'


function FavoriteToggleForm({propertyId,favoriteId}:{propertyId:string,favoriteId:string | null}) {
  
  const toggleAction = toggleFavoritAction.bind(null , {
    propertyId,
    favoriteId,
  })
  return (
    <FormContainer actions={toggleAction}>
      <CardSubmitButton isFavorit={!!favoriteId} />
    </FormContainer>
  )
}

export default FavoriteToggleForm