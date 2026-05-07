'use client'
import 'leaflet/dist/leaflet.css'
import { getCountryByCode } from '@/utils/countries'
import { MapContainer , Marker ,TileLayer, ZoomControl, useMap} from 'react-leaflet'
import CountryFlag from '../card/CountryFlag'
import { useEffect, useMemo } from 'react'
import L from 'leaflet'

/** Recalculates tile layout when the map box size changes (sidebar, flex, vh). */
function MapInvalidateOnResize() {
    const map = useMap()
    useEffect(() => {
        const run = () => {
            map.invalidateSize({ animate: false })
        }
        run()
        const raf = requestAnimationFrame(run)
        window.addEventListener('resize', run)
        const el = map.getContainer()
        const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(run) : null
        ro?.observe(el)
        return () => {
            cancelAnimationFrame(raf)
            window.removeEventListener('resize', run)
            ro?.disconnect()
        }
    }, [map])
    return null
}

const DEFAULT_CENTER: [number, number] = [20, 0]
const LEAFLET_CDN = 'https://unpkg.com/leaflet@1.9.4/dist/images';

function useFixedLeaftetIcons(){
    useEffect(()=>{
        delete (L.Icon.Default.prototype as unknown as { _getIconUrl?: string })
          ._getIconUrl
        L.Icon.Default.mergeOptions({
            iconUrl: `${LEAFLET_CDN}/marker-icon.png`,
            iconRetinaUrl: `${LEAFLET_CDN}/marker-icon-2x.png`,
            shadowUrl: `${LEAFLET_CDN}/marker-shadow.png`,

        })
    })
}

function PropertyMap({countryCode}:{countryCode:string}) {
    useFixedLeaftetIcons();

    const position = useMemo(() : [number,number] =>{
        const loc = getCountryByCode(countryCode)?.location;
        if (
            Array.isArray(loc) &&
            loc.length === 2 &&
            typeof loc[0] === 'number' &&
            typeof loc[1] === 'number' 
        ) {
            return [loc[0] , loc[1]];
        }
        return DEFAULT_CENTER;
    },[countryCode])
 
  return (

    <div className='mt-4'>
         <div className='mt-4'>
             <h2 className='text-lg fount-semibold tracking-tigth' >Where You Will Be Staying</h2>
             <CountryFlag country={countryCode} />
         </div>
         <div className="relative h-[50vh] min-h-[240px] w-full overflow-hidden rounded-xl border border-slate-200/90 bg-slate-100 shadow-md shadow-slate-900/5 ring-1 ring-slate-900/[0.06] dark:border-slate-700/90 dark:bg-slate-900/40 dark:shadow-black/30 dark:ring-white/[0.06]">
            <MapContainer 
            key={`${position[0]}-${position[1]}`}
             scrollWheelZoom={false}
             zoomControl={false}
             zoom={6}
             center={position}
             className="!z-0 h-full w-full rounded-xl border-0 bg-slate-100 outline-none dark:bg-slate-900/40 [&_.leaflet-control]:border-slate-200/80 dark:[&_.leaflet-control]:border-slate-600 [&_.leaflet-control-zoom]:shadow-sm"
             >
                <MapInvalidateOnResize />
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                 <ZoomControl position='bottomright' />
                 <Marker position={position} />
             </MapContainer>
         </div>
     </div>
    )
}

export default PropertyMap