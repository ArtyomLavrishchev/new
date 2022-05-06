import React, { useState, useEffect } from 'react';
import { Marker, FeatureGroup, Popup } from 'react-leaflet';
// import MarkerClusterGroup from 'react-leaflet-markercluster';

const fetchData = function fetchData(url: any, options: any) {
  const request = fetch(url, options);

  return request
      .then((r) => r.json())
      .then((data) => data.features);
};

export default function GeojsonLayer({ url, cluster }: any) {
  const [data, setData] = useState<any[]>([]);

  useEffect(()=> {
    if (url) {
      const abortController = new AbortController();

      fetchData(url, { signal: abortController.signal }).then((data) => {
        setData(data);
      });

      return () => {
        abortController.abort();
      };
    }
  }, [url]);

  // const GroupComponent = cluster ? MarkerClusterGroup : FeatureGroup;

  return (
    <FeatureGroup>
      {data.map((f) => (
        <Marker
          key={JSON.stringify(f.properties)}
          position={f.geometry.coordinates.reverse()}
        >
          <Popup minWidth={200} closeButton={false}>
            <div style={{ backgroundColor: 'red', color: 'white' }}>
              <b>Hello</b>
              <p>I am {f.properties.name}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </FeatureGroup>
  );
}
