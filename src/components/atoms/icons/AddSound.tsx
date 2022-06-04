import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
import { COLORS, styles } from '../../../styles';

const SvgAddSound = (properties: SvgProps) => (
  <Svg
    viewBox="0 0 20 22"
    height={styles.app({}).smallImage.height}
    width={styles.app({}).smallImage.width}
  >
    <Path
      d="M1.87378 12.8333V9.16666C1.87378 8.66041 2.28419 8.25 2.79045 8.25H5.2629C5.44388 8.25 5.6208 8.19643 5.77137 8.09604L9.6153 5.53343C10.2245 5.12731 11.0404 5.564 11.0404 6.29614V15.7039C11.0404 16.436 10.2245 16.8727 9.6153 16.4665L5.77137 13.9039C5.6208 13.8035 5.44388 13.75 5.2629 13.75H2.79045C2.28419 13.75 1.87378 13.3396 1.87378 12.8333Z"
      stroke={properties.fill ? properties.fill : COLORS.SECONDARY_GREY}
      stroke-width="10"
    />
    <Path
      d="M15.1655 6.875C15.1655 6.875 16.5405 8.25 16.5405 10.5417C16.5405 12.8333 15.1655 14.2083 15.1655 14.2083"
      stroke={properties.fill ? properties.fill : COLORS.SECONDARY_GREY}
      stroke-width="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M17.9155 4.125C17.9155 4.125 20.2072 6.41667 20.2072 10.5417C20.2072 14.6667 17.9155 16.9583 17.9155 16.9583"
      stroke={properties.fill ? properties.fill : COLORS.SECONDARY_GREY}
      stroke-width="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

export default SvgAddSound;
