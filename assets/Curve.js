import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Curve = ({ width }) => {
    return (
        // <Svg width={width} height={width/3.02} viewBox="0 0 136 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        //     <Path d="M136 1C105.5 1 103.5 44.5 68 44.5" stroke="#5CB881" stroke-opacity="0.3" />
        //     <Path d="M68 44.5C37.5 44.5 35.5 1 0 1" stroke="#5CB881" stroke-opacity="0.3" />
        // </Svg>
        <Svg width={width} height={width/134*45} viewBox="0 0 134 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M67 44.5C31.367 44.5 29.3596 1.00009 0 1" stroke="#5CB881" stroke-opacity="1" />
            <Path d="M134 1C98.367 1 96.3596 44.4999 67 44.5" stroke="#5CB881" stroke-opacity="1" />
        </Svg>


    );
};

export default Curve;