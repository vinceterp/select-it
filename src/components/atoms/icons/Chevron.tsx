import React from 'react';
import Svg, { SvgProps, Path, Rect, G, Defs, ClipPath } from 'react-native-svg';

const SvgChevron = (properties: SvgProps) => (
  <Svg width="24" height="24" viewBox="0 0 19 19" {...properties}>
    <G clip-path="url(#clip0_203_23)">
      <Path
        d="M7.39869 6.88234L9.77493 9.25858L7.39869 11.6348L8.48652 12.7304L11.9583 9.25858L8.48652 5.78681L7.39869 6.88234ZM1.54297 9.25858C1.54297 13.5173 4.99931 16.9736 9.25802 16.9736C13.5167 16.9736 16.9731 13.5173 16.9731 9.25858C16.9731 4.99987 13.5167 1.54353 9.25802 1.54353C4.99931 1.54353 1.54297 4.99987 1.54297 9.25858ZM15.4301 9.25858C15.4301 12.6686 12.6681 15.4306 9.25802 15.4306C5.84797 15.4306 3.08598 12.6686 3.08598 9.25858C3.08598 5.84853 5.84797 3.08654 9.25802 3.08654C12.6681 3.08654 15.4301 5.84853 15.4301 9.25858Z"
        fill="#4292EC"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_203_23">
        <Rect
          width="18.5161"
          height="18.5161"
          fill="white"
          transform="translate(0 18.5166) rotate(-90)"
        />
      </ClipPath>
    </Defs>
  </Svg>
);

export default SvgChevron;
