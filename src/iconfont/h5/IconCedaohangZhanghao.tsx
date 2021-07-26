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

const IconCedaohangZhanghao: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M406.762 506.704c-96.513-63.023-134.87-185.575-91.509-292.376 43.361-106.8 156.292-167.93 269.423-145.837 113.13 22.092 194.767 121.217 194.762 236.485 0 133.045-107.837 240.908-240.881 240.941-199.56 0-361.322 161.822-361.322 361.412H117c0-186.85 121.495-345.299 289.762-400.625z m371.827 347.884h-58.427c-13.584 0-24.695-10.696-24.759-23.84l-0.016-2.719c-0.032-6.372-2.542-12.322-7.08-16.769-7.312-7.18-19.163-8.647-27.902-3.675l-2.478 1.416c-5.654 3.217-12.563 4.154-18.913 2.522-6.383-1.647-11.899-5.755-15.159-11.272l-29.205-49.51c-6.675-11.318-2.665-25.91 8.936-32.519l2.404-1.37c5.542-3.164 9.515-8.25 11.19-14.328 1.67-6.064 0.841-12.38-2.34-17.778a23.043 23.043 0 0 0-8.643-8.426l-2.457-1.37c-11.787-6.572-15.882-21.216-9.138-32.642l29.205-49.51c3.308-5.59 8.659-9.588 15.073-11.261 6.49-1.647 13.265-0.73 18.893 2.44l2.452 1.379c7.233 4.076 16.323 4.087 23.413 0.17a23.066 23.066 0 0 0 8.728-8.493 22.776 22.776 0 0 0 3.175-11.766l-0.021-2.764c-0.059-6.336 2.564-12.559 7.185-17.063 4.6-4.493 11.005-7.077 17.568-7.077l58.449-0.01c6.606 0 12.823 2.486 17.504 7.005 4.68 4.535 7.255 10.552 7.255 16.955v2.738c0 13.017 10.53 23.61 23.471 23.61a23.222 23.222 0 0 0 11.574-3.069l2.494-1.43c5.633-3.243 12.542-4.196 18.945-2.553 6.378 1.626 11.914 5.744 15.18 11.292l29.21 49.51c6.691 11.338 2.66 25.94-8.988 32.544l-2.415 1.37c-11.52 6.526-15.509 20.943-8.903 32.138a22.941 22.941 0 0 0 8.574 8.4l2.43 1.359c11.755 6.598 15.829 21.226 9.1 32.622l-29.189 49.5c-3.244 5.496-8.728 9.599-15.052 11.251-6.127 1.61-13.169 0.777-18.844-2.383l-2.484-1.394c-7.197-4.03-16.27-4.036-23.34-0.129a23.04 23.04 0 0 0-8.722 8.472 22.89 22.89 0 0 0-3.186 11.658l0.01 2.733c0.022 6.42-2.547 12.446-7.222 16.99-4.685 4.545-10.913 7.046-17.535 7.046z m-97.715-81.155c10.643 0 20.66 4.08 28.207 11.483 7.57 7.422 11.772 17.307 11.819 27.838l0.014 2.4c0.004 1.403 1.18 2.539 2.63 2.54h51.685a2.69 2.69 0 0 0 1.863-0.75 2.49 2.49 0 0 0 0.767-1.8l-0.01-2.421a38.486 38.486 0 0 1 5.346-19.606 39.392 39.392 0 0 1 14.929-14.47c12.097-6.656 27.656-6.643 39.838 0.187l2.187 1.225a2.7 2.7 0 0 0 1.313 0.337c1.355-0.264 1.938-0.697 2.282-1.28l25.827-43.792c0.72-1.211 0.282-2.764-0.965-3.465l-2.145-1.198a39.336 39.336 0 0 1-14.68-14.342c-11.052-18.728-4.38-42.85 14.873-53.755l2.136-1.212c1.237-0.705 1.665-2.253 0.955-3.46l-25.84-43.802a2.626 2.626 0 0 0-1.6-1.197c-1.162-0.091-1.61 0.036-2.018 0.269l-2.198 1.26a40.315 40.315 0 0 1-20.076 5.328c-22.076 0-40.035-17.735-40.035-39.535v-2.422c0-0.683-0.273-1.325-0.767-1.803a2.712 2.712 0 0 0-1.859-0.742l-51.708 0.009a2.636 2.636 0 0 0-1.86 0.747 2.476 2.476 0 0 0-0.766 1.807l0.019 2.455c0.057 6.941-1.788 13.774-5.345 19.802a39.39 39.39 0 0 1-14.92 14.465c-12.144 6.693-27.765 6.639-39.942-0.237l-2.169-1.22a2.716 2.716 0 0 0-1.331-0.35c-1.36 0.263-1.934 0.692-2.287 1.288l-25.835 43.788c-0.72 1.216-0.283 2.773 0.97 3.474l2.159 1.202a39.372 39.372 0 0 1 14.778 14.384c5.34 9.065 6.743 19.638 3.953 29.773-2.795 10.131-9.448 18.632-18.736 23.932l-2.131 1.215c-1.233 0.706-1.656 2.254-0.946 3.456l25.831 43.788c0.352 0.59 0.933 1.022 1.614 1.198 1.133 0.082 1.595-0.037 2-0.273l2.187-1.248a40.351 40.351 0 0 1 19.987-5.27z m68.6-3.174c-42.045 0-76.25-33.1-76.25-73.788 0-40.688 34.205-73.789 76.25-73.789s76.25 33.101 76.25 73.789c0 40.687-34.205 73.788-76.25 73.788z m0-125.642c-29.544 0-53.583 23.263-53.583 51.854 0 28.59 24.039 51.853 53.583 51.853 29.544 0 53.583-23.263 53.583-51.853s-24.04-51.854-53.583-51.854zM538.557 485.682c99.789-0.017 180.675-80.917 180.675-180.706 0-73.091-44.03-138.985-111.56-166.953-67.528-27.968-145.255-12.502-196.934 39.185-51.68 51.688-67.133 129.418-39.153 196.942 27.98 67.524 93.88 111.544 166.972 111.532z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconCedaohangZhanghao.defaultProps = {
  size: 18,
};

export default IconCedaohangZhanghao;
