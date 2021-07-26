/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

const IconXiaoxi3: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M821.333 787.2V454.4C821.333 320 736 204.8 614.4 162.133 612.267 106.667 567.467 64 512 64s-100.267 42.667-102.4 98.133C290.133 204.8 202.667 320 202.667 454.4v332.8h-64v53.333H371.2C381.867 908.8 441.6 960 512 960s130.133-51.2 140.8-119.467h232.533V787.2h-64zM512 117.333c21.333 0 38.4 12.8 46.933 32C544 147.2 529.067 145.067 512 145.067s-32 2.133-46.933 4.266c8.533-19.2 25.6-32 46.933-32zM256 454.4c0-140.8 115.2-256 256-256s256 115.2 256 256v332.8H256V454.4z m256 452.267c-40.533 0-76.8-27.734-87.467-66.134h172.8c-8.533 38.4-44.8 66.134-85.333 66.134z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconXiaoxi3.defaultProps = {
  size: 18,
};

export default IconXiaoxi3;
