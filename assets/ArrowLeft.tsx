import React from "react";
import Svg, { Path } from "react-native-svg";

const ArrowLeft = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      viewBox="0 0 24 24"
    >
      <Path
        fill="#000"
        d="M19 12l.707.707.707-.707-.707-.707L19 12zM7 11a1 1 0 100 2v-2zm8.707 5.707l4-4-1.414-1.414-4 4 1.414 1.414zm4-5.414l-4-4-1.414 1.414 4 4 1.414-1.414zM19 11H7v2h12v-2z"
      />
    </Svg>
  );
};

export default ArrowLeft;
