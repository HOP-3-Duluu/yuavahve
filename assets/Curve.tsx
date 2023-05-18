import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Curve = ({ width }: { width: number }) => {
  return (
    <Svg
      width={width}
      height={(width / 134) * 45}
      viewBox="0 0 134 45"
      fill="none"
    >
      <Path
        d="M67 44.5C31.367 44.5 29.3596 1.00009 0 1"
        stroke="#5CB881"
        stroke-opacity="1"
      />
      <Path
        d="M134 1C98.367 1 96.3596 44.4999 67 44.5"
        stroke="#5CB881"
        stroke-opacity="1"
      />
    </Svg>
  );
};

export default Curve;
