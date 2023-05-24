import * as React from "react";
import Svg, { Path } from "react-native-svg";

const TrashIcon = (props) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28 8H4v4c.62 0 .93 0 1.184.068A2 2 0 016.6 13.482c.068.255.068.565.068 1.185V22c0 2.828 0 4.243.878 5.121.879.879 2.293.879 5.122.879h6.666c2.829 0 4.243 0 5.122-.879.878-.878.878-2.293.878-5.121v-7.333c0-.62 0-.93.069-1.185a2 2 0 011.414-1.414C27.07 12 27.38 12 28 12V8zm-14.333 6.667a1 1 0 10-2 0v6.666a1 1 0 102 0v-6.666zm6.666 0a1 1 0 10-2 0v6.666a1 1 0 102 0v-6.666z"
        fill="#EE6969"
      />
      <Path
        d="M13.424 4.494c.152-.142.487-.267.953-.356A8.908 8.908 0 0116 4c.587 0 1.158.048 1.623.138.466.09.801.214.953.356"
        stroke="#EE6969"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default TrashIcon;
