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

const IconGerenziliao: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 496c124.8 0 224-99.2 224-224s-99.2-224-224-224-224 99.2-224 224 99.2 224 224 224z m0-384c89.6 0 160 70.4 160 160s-70.4 160-160 160-160-70.4-160-160 70.4-160 160-160zM576 912H144c-9.6 0-16-6.4-16-16 0-128 128-320 320-320h128c19.2 0 32-12.8 32-32s-12.8-32-32-32h-128C214.4 512 64 739.2 64 896c0 44.8 35.2 80 80 80H576c19.2 0 32-12.8 32-32s-12.8-32-32-32zM928 720h-288c-19.2 0-32 12.8-32 32s12.8 32 32 32h288c19.2 0 32-12.8 32-32s-12.8-32-32-32zM928 864h-288c-19.2 0-32 12.8-32 32s12.8 32 32 32h288c19.2 0 32-12.8 32-32s-12.8-32-32-32zM608 608c0 19.2 12.8 32 32 32h288c19.2 0 32-12.8 32-32s-12.8-32-32-32h-288c-19.2 0-32 12.8-32 32z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconGerenziliao.defaultProps = {
  size: 18,
};

export default IconGerenziliao;
