import * as React from "react"
import Svg, { Path, Ellipse, Circle } from "react-native-svg"

const Profile = ({width} : {width:any}) => {
  return (
    <Svg
      width={width}
      height={width}
      viewBox="0 0 128 128"
      fill="none"
    >
      <Path
        d="M105.213 109.051c-2.431-6.804-7.787-12.817-15.239-17.105-7.452-4.288-16.581-6.613-25.974-6.613-9.392 0-18.522 2.325-25.974 6.613-7.451 4.288-12.808 10.301-15.239 17.105"
        stroke="#5CB881"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Ellipse
        cx={63.9998}
        cy={42.6667}
        rx={21.3333}
        ry={21.3333}
        stroke="#5CB881"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Circle cx={64} cy={64} r={63.5} stroke="#D8D8D8" />
    </Svg>
  )
}

export default Profile