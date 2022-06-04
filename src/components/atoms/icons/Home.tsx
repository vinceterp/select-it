import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
import { COLORS, styles } from '../../../styles';

const SvgHome = (properties: SvgProps) => (
  <Svg
    height={styles.app({}).smallImage.height}
    width={styles.app({}).smallImage.width}
    viewBox="0 0 23 22"
  >
    <Path
      d="M1.66846 10.9999L11.097 1.57129L20.5256 10.9999"
      stroke={properties.fill ?? COLORS.SECONDARY_GREY}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M3.76367 12.0479V16.2383C3.76367 17.3955 4.70174 18.3336 5.85891 18.3336H16.3351C17.4923 18.3336 18.4303 17.3955 18.4303 16.2383V12.0479"
      stroke={properties.fill ?? COLORS.SECONDARY_GREY}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

export default SvgHome;
