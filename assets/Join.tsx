import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function Join({width} : {width: number}) {
  return (
    <Svg
      width={width}
      height={width}
      viewBox="0 -0.5 21 21"
    >
      <G
        stroke="#5CB881"
        strokeWidth={2}
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path
          d="M12 13a5 5 0 110-10 5 5 0 010 10zm-.985 8H3c.8-3.108 3.461-4.767 7.987-4.977M18.5 14v7m3.5-3.5h-7"
          transform="translate(-747 -156) translate(745 154)"
        />
      </G>
    </Svg>
  )
}

export default Join
