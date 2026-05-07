import { fetchFavoritesAction } from '@/utils/actions';
import React from 'react'

import PropertiesList from '@/components/home/PropertiesList';
import EmptyList from '@/components/home/EmptyList';

async function favoritespage() {
  const favorites = await fetchFavoritesAction();
  if (!favorites?.length) {
    return (
      <EmptyList
        heading="no favorites found"
        message="try adding some favorites"
        btnText="browse properties"
      />
    );
  }
  return <PropertiesList properties={favorites} />;
}

export default favoritespage