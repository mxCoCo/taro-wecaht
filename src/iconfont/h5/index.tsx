/* tslint:disable */
/* eslint-disable */

import React, { CSSProperties, DOMAttributes, FunctionComponent } from 'react';
import IconQianbao from './IconQianbao';
import IconZhanghaoguanli from './IconZhanghaoguanli';
import IconCedaohangZhanghao from './IconCedaohangZhanghao';
import IconGerenziliao from './IconGerenziliao';
import IconXiaoxi3 from './IconXiaoxi3';
import IconZu1776 from './IconZu1776';
import Icon50 from './Icon50';
import IconXinxi from './IconXinxi';

export type IconNames = 'qianbao' | 'zhanghaoguanli' | 'cedaohang-zhanghao' | 'gerenziliao' | 'xiaoxi3' | 'zu1776' | '50' | 'xinxi';

interface Props extends DOMAttributes<SVGElement> {
  name: IconNames;
  size?: number;
  color?: string | string[];
  style?: CSSProperties;
  className?: string;
}

const IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'qianbao':
      return <IconQianbao {...rest} />;
    case 'zhanghaoguanli':
      return <IconZhanghaoguanli {...rest} />;
    case 'cedaohang-zhanghao':
      return <IconCedaohangZhanghao {...rest} />;
    case 'gerenziliao':
      return <IconGerenziliao {...rest} />;
    case 'xiaoxi3':
      return <IconXiaoxi3 {...rest} />;
    case 'zu1776':
      return <IconZu1776 {...rest} />;
    case '50':
      return <Icon50 {...rest} />;
    case 'xinxi':
      return <IconXinxi {...rest} />;

  }

  return null;
};

export default IconFont;
