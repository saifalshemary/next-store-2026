'use client'

import dynamic from 'next/dynamic'

const PropertyMap = dynamic(
  () => import('@/components/propertys/PropertyMap'),
  {
    ssr: false,
    loading: () => (
      <div className="mt-4 space-y-4">
        <div className="h-12 w-64 animate-pulse rounded-md bg-muted" />
        <div className="h-[50vh] animate-pulse rounded-lg bg-muted" />
      </div>
    ),
  },
)

export default function PropertyMapDynamic({
  countryCode,
}: {
  countryCode: string
}) {
  return <PropertyMap countryCode={countryCode} />
}
