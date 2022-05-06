import React, { ChangeEvent, FC } from 'react';

import { BaseMapItems } from '@pages/MapComponent/MapComponent';

import styles from './BaseMap.module.scss';

type Props = {
  baseMap: BaseMapItems;
  onChange: (map: BaseMapItems) => void;
}

const baseMapOptions = [
  { value: 'osm', label: 'OSM' },
  { value: 'hot', label: 'HOT' },
  { value: 'dark', label: 'DARK' },
];

const BaseMap: FC<Props> = ({ baseMap, onChange }) => {
  const onChangeBaseMap = (e: ChangeEvent<HTMLSelectElement>) => {
    const bm = e.target.value as BaseMapItems;
    onChange(bm);
  };

  return (
    <div className={ styles.container }>
      <select value={baseMap} onChange={onChangeBaseMap}>
        {baseMapOptions.map((bm) => <option key={bm.value} {...bm} />)}
      </select>
    </div>
  );
};

export default BaseMap;
