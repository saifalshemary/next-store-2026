import React from 'react'
import { FaHeart } from 'react-icons/fa6';
import { Button } from '../ui/button';
import { auth } from '@clerk/nextjs/server';
import CardSignInButton from '../form/CardSignInButton';
import FavoriteToggleForm from './FavoriteToggleForm';
import { fetchFavoriteId } from '@/utils/actions';


async function FavoriteToggleButton({propertyId}:{propertyId:string}) {
  const {userId} = await auth();
  
  if(!userId) return <CardSignInButton />

  const favoriteId = await fetchFavoriteId({propertyId})
  
  return (
    <FavoriteToggleForm propertyId ={propertyId} favoriteId={favoriteId} />
  )
}

export default FavoriteToggleButton