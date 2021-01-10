import React, { useRef } from 'react';
import { YMaps, Map, MapState, Placemark, YMapsApi } from 'react-yandex-maps';
import { Skeleton } from '@material-ui/lab';
import { STATUS_AS_STRING } from 'constants/car';

import type { Car } from 'reducers/vehicles/cars';


interface CarMapsProps {
  cars: Car[];
  width?: string | number;
  height?: string | number;
}

const CarMaps: React.FC<CarMapsProps> = React.memo(({
  cars,
  width = '100%',
  height = 250 
}: CarMapsProps) => {
  const map = useRef<any>(null);
  const initMap = React.useCallback((ymaps: YMapsApi) => {
    if (cars.length > 1) {
      map.current.setBounds(
        map.current.geoObjects.getBounds(),
        {
          checkZoomRange: true,
          zoomMargin: 15,
        }
      );
    }
  }, [cars]);
  const defaultState: MapState | null = React.useMemo(() => {
    if (!cars || !cars.length) {
      return null;
    }
    
    return {
      zoom: 15,
      center: cars[0].coordinats,
    };
  }, [cars]);

  return (
    <>
      {!cars.length && <Skeleton variant="rect" width={width} height={height} />}
      {cars.length > 0 && defaultState && (
        <YMaps>
          <Map
            width={width}
            height={height}
            defaultState={defaultState}
            instanceRef={(ref: any) => map.current = ref}
            onLoad={(ymaps: YMapsApi) => {
              ymaps.ready(initMap);
            }}
          >
            {cars.map((car) => <Placemark
              key={car.id}
              geometry={car.coordinats}
              properties={{
                iconCaption: car.model,
                balloonContentHeader: car.model,
                balloonContent: STATUS_AS_STRING[car.status],
              }}
              modules={['geoObject.addon.balloon']}
              options={{
                iconColor: car.color,
              }}
            />)}
          </Map>
        </YMaps>
      )}
    </>
  );
});

export default CarMaps;
