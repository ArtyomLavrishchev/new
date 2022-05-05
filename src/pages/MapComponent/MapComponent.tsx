import React, { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
import L, { TileLayer as TL } from 'leaflet';
import { Marker, Popup, TileLayer, MapContainer } from 'react-leaflet';

import BaseMap from '@components/Content/MapComponent/BaseMap';

import './MapComponent.css';
import Checkbox from '@components/UI/Checkbox';
import GeojsonLayer from '@components/Content/MapComponent/GeojsonLayer';

type Props = {

}

const baseMapDict = {
  osm: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  hot: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
  dark: 'https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png',
};

export type BaseMapItems = keyof typeof baseMapDict;

type State = {
  lat: number;
  lng: number;
  zoom: number;
  baseMap: BaseMapItems;
}

const MapComponent: FC<Props> = ({}) => {
  L.Icon.Default.imagePath = 'https://unpkg.com/leaflet@1.8.0/dist/images/';

  const ref = useRef<TL>(null);

  const [state, setState] = useState<State>({
    lat: 55.702868,
    lng: 37.530865,
    zoom: 10,
    baseMap: 'osm',
  });

  const [geojsonVisible, setGeojsonVisible] = useState(false);

  const { zoom, baseMap, ...center } = state;

  useEffect(() => {
    if (ref.current) {
      ref.current.setUrl(baseMapDict[baseMap]);
    }
  }, [baseMap]);

  const onChangeBaseMap = (bm: BaseMapItems) => {
    setState((prev) => ({ ...prev, baseMap: bm }));
  };

  const onGeojsonToggle = (e: ChangeEvent<HTMLInputElement>) => {
    setGeojsonVisible(e.target.checked);
  };

  return (
    <MapContainer center={center} zoom={zoom}>
      <TileLayer
        ref={ref}
        url={baseMapDict[baseMap]}
      />
      <div className='toggleGeojson'>
        <Checkbox
          label='Toggle Geojson'
          name='layerToggle'
          checked={geojsonVisible}
          onChange={onGeojsonToggle}
        />
      </div>
      <BaseMap baseMap={baseMap} onChange={onChangeBaseMap} />
      {geojsonVisible && <GeojsonLayer url='places.json' cluster />}
      <Marker position={center}>
        <Popup>
          {baseMapDict[baseMap]}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
