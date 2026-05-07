import React from 'react'
import { fetchPropertyById } from '@/utils/actions'
import { notFound } from 'next/navigation';
import BreadcrumbConponent from '@/components/propertys/Breadcrumb';
import FavoriteToggleButton from '@/components/card/FavoriteToggleButton';
import ShareProperty from '@/components/propertys/ShareProperty';
import ImageContainer from '@/components/propertys/ImageContainer';
import PropertyRating from '@/components/card/PropertyRating';
import BookindCalnder from '@/components/propertys/booking/BookingCalender';
import PropertyDetails from '@/components/propertys/propertyDetails';
import { Separator } from '@/components/ui/separator';
import ServiceProperty from '@/components/propertys/ServiceProperty';
import PropertyMapDynamic from '@/components/propertys/PropertyMapDynamic';


async function PropertyId({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const property = await fetchPropertyById({ id });
  if (!property) notFound();
  const details = {
    bedrooms: property.bedrooms ?? 0,
    guests: property.guests ?? 0,
    bathrooms: property.bathrooms ?? 0,
  };

  return (
    <section className='mx-auto max-w-6xl px-4 pb-16 pt-4 sm:px-6'>
        <BreadcrumbConponent name={property.name || ''}  />
        <header className='flex justify-between items-center mt-2'>
          <div className='flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-baseline sm:gap-x-3'>
            <h1 className='text-4xl font-bold '>{property.name}</h1>  
              {property.tagline ? (
                <p className='text-muted-foreground text-base leading-relaxed'>
                {property.tagline}
                </p>
              ) : null}
            <p className='text-muted-foreground text-sm'>
              {property.category}
              {property.country ? ` .${property.country}` : null}
            </p>
            </div>
            <div className='flex shrink-0 items-center gap-2 sm:pt-1'>
              {/* share botton  */}
              <ShareProperty propertyId={property.id}/>
              <FavoriteToggleButton propertyId={property.id} />
            </div>
        </header>
        <ImageContainer image={property.image ?? ''} name={property.name ?? ''}/>
              
              <div className='mt-10 grid gap-10 lg:grid-cols-12 lg:gap-12'>
                <div className='space-y-8 lg:col-span-7'>
                  <section className='space-y-4'>
                    <h2 className='text-lg font-semibold tracking-tight'>
                      about this page
                    </h2>
                    <p className='text-muted-foreground leading-relaxed'>
                      {property.description}
                    </p>
                  </section>
                  <Separator />
                  <section className='space-y-3'>
                    <h2 className='text-lg font-semibold tracking-tight'>
                      Details
                    </h2>
                    <PropertyDetails details={details} />
                  </section>
                  <section className='space-y-3'>
                    <h2 className='text-lg font-semibold tracking-tight '>Amenities</h2>
                    <ServiceProperty service={property.services} />
                  </section>
                  
                </div>
                

                <aside className='lg:col-span-5 lg:justify-self-end'>
                  <div className='w-full lg:w-[380px] lg:sticky lg:top-24'>
                    <BookindCalnder price={property.price ?? 0} />
                  </div>
                </aside>
                <section className='lg:col-span-12'>
                  <PropertyMapDynamic countryCode={property.country} />
                </section>
              </div>
      </section>
  )
}

export default PropertyId