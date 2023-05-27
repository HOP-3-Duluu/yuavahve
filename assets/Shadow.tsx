import * as React from "react"
import Svg, { Path } from "react-native-svg"

const Shadow = (props) => {
  return (
    <Svg
      width={173}
      height={22}
      viewBox="0 0 173 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M86.5 22c47.773 0 86.5-4.925 86.5-11S134.273 0 86.5 0 0 4.925 0 11s38.727 11 86.5 11z"
        fill="#D3D3D3"
      />
    </Svg>
  )
}

export default Shadow
