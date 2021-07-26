/* tslint:disable */
/* eslint-disable */

import React, { CSSProperties, DOMAttributes, FunctionComponent } from 'react';
import { getIconColor } from './helper';

interface Props extends DOMAttributes<SVGElement> {
  size?: number;
  color?: string | string[];
  style?: CSSProperties;
  className?: string;
}

const DEFAULT_STYLE: CSSProperties = {
  display: 'block',
};

const IconZu1776: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1088 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M905.75 793.25H174.5c-61.875 0-112.5-50.625-112.5-112.5V174.5C62 112.625 112.625 62 174.5 62h731.25c61.875 0 112.5 50.625 112.5 112.5v506.25c0 61.875-50.625 112.5-112.5 112.5zM174.5 118.25c-33.75 0-56.25 22.5-56.25 56.25v506.25c0 33.75 22.5 56.25 56.25 56.25h731.25c33.75 0 56.25-22.5 56.25-56.25V174.5c0-33.75-22.5-56.25-56.25-56.25H174.5z"
        fill={getIconColor(color, 0, '#535353')}
      />
      <path
        d="M512 579.5c-5.625 0-16.875-5.625-22.5-11.25L348.875 410.75c-11.25-11.25-11.25-28.125 0-39.375 11.25-11.25 28.125-11.25 39.375 0L512 512l174.375-213.75c11.25-11.25 28.125-11.25 39.375-5.625 11.25 11.25 11.25 28.125 5.625 39.375L534.5 568.25c-5.625 11.25-11.25 11.25-22.5 11.25zM540.125 962c-16.875 0-28.125-11.25-28.125-28.125v-168.75c0-16.875 11.25-28.125 28.125-28.125s28.125 11.25 28.125 28.125v168.75c0 16.875-11.25 28.125-28.125 28.125z"
        fill={getIconColor(color, 1, '#535353')}
      />
      <path
        d="M708.875 962h-337.5c-16.875 0-28.125-11.25-28.125-28.125s11.25-28.125 28.125-28.125h337.5c16.875 0 28.125 11.25 28.125 28.125s-11.25 28.125-28.125 28.125z"
        fill={getIconColor(color, 2, '#535353')}
      />
    </svg>
  );
};

IconZu1776.defaultProps = {
  size: 18,
};

export default IconZu1776;
