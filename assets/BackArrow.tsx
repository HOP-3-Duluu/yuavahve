import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";

const BackArrow = () => {
  return (
    <Svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <Path
        d="M6.66675 16L5.95964 15.2929L5.25253 16L5.95964 16.7071L6.66675 16ZM22.6667 17C23.219 17 23.6667 16.5523 23.6667 16C23.6667 15.4477 23.219 15 22.6667 15V17ZM11.293 9.95956L5.95964 15.2929L7.37385 16.7071L12.7072 11.3738L11.293 9.95956ZM5.95964 16.7071L11.293 22.0404L12.7072 20.6262L7.37385 15.2929L5.95964 16.7071ZM6.66675 17H22.6667V15H6.66675V17Z"
        fill="#5CB881"
      />
    </Svg>
  );
};

export default BackArrow;
