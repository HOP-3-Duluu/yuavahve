import * as React from "react";
import Svg, { Path } from "react-native-svg";

const UpDownArrow = (props) => {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M8 2l-.707-.707L8 .586l.707.707L8 2zm1 15a1 1 0 11-2 0h2zM2.293 6.293l5-5 1.414 1.414-5 5-1.414-1.414zm6.414-5l5 5-1.414 1.414-5-5 1.414-1.414zM9 2v15H7V2h2zM16 22l-.707.707.707.707.707-.707L16 22zm1-15a1 1 0 10-2 0h2zm-6.707 10.707l5 5 1.414-1.414-5-5-1.414 1.414zm6.414 5l5-5-1.414-1.414-5 5 1.414 1.414zM17 22V7h-2v15h2z"
        fill="#000"
      />
    </Svg>
  );
};

export default UpDownArrow;
