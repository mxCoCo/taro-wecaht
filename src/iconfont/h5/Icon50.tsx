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

const Icon50: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M512 959c246.854 0 447-200.146 447-447 0-246.854-200.146-447-447-447C265.146 65 65 265.146 65 512 65 758.854 265.146 959 512 959zM512 94.8c230.048 0 417.2 187.152 417.2 417.2S742.048 929.2 512 929.2 94.8 742.048 94.8 512 281.952 94.8 512 94.8z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M497.1 269.875l29.8 0 0 342.7-29.8 0 0-342.7Z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <path
        d="M512 701.975m-29.8 0a29.8 29.8 0 1 0 59.6 0 29.8 29.8 0 1 0-59.6 0Z"
        fill={getIconColor(color, 2, '#333333')}
      />
    </svg>
  );
};

Icon50.defaultProps = {
  size: 18,
};

export default Icon50;
