import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const FilterIcon = (props) => {
  return (
    <Svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M16 9.333h10.667M5.333 9.333h5.334M22.667 22.667h4M5.333 22.667H16"
        stroke="#5CB881"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Circle
        cx={13.3333}
        cy={9.33333}
        r={2.66667}
        transform="rotate(90 13.333 9.333)"
        stroke="#5CB881"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Circle
        cx={20.0001}
        cy={22.6667}
        r={2.66667}
        transform="rotate(90 20 22.667)"
        stroke="#5CB881"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default FilterIcon;
