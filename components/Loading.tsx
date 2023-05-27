import React from "react";
import { View } from "react-native";
import LottieView from "lottie-react-native";

const Loading = () => {
  return (
    <View
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LottieView
        autoPlay
        loop
        style={{
          width: 100,
          height: 100,
        }}
        source={require("../assets/loading.json")}
      />
    </View>
  );
};
export default Loading;
