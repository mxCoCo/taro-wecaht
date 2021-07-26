/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';

export type IconNames = 'qianbao' | 'zhanghaoguanli' | 'cedaohang-zhanghao' | 'gerenziliao' | 'xiaoxi3' | 'zu1776' | '50' | 'xinxi';

export interface IconProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
  style?: React.CSSProperties;
}

const IconFont: FunctionComponent<IconProps> = () => {
  return null;
};

export default IconFont;
