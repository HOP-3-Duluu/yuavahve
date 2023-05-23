import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const SearchIcon = (props) => {
  return (
    <Svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle
        cx={14.6666}
        cy={14.6667}
        r={9.33333}
        stroke="#5CB881"
        strokeWidth={2}
      />
      <Path
        d="M26.667 26.667l-4-4"
        stroke="#5CB881"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default SearchIcon;
