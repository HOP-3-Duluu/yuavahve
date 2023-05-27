import React from "react";
import { View, Text } from "react-native";
import Logo from "../assets/Logo";
import Shadow from "../assets/Shadow";
import Bubbles from "../assets/Bubbles";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  interpolate,
} from "react-native-reanimated";

const EmptyList = () => {
  const shadow = useSharedValue(0.9);

  shadow.value = withRepeat(withTiming(1, { duration: 1000 }), -1, true);

  const shadowStyle = useAnimatedStyle(() => {
    return { transform: [{ scale: shadow.value }] };
  }, []);

  const logoStyle = useAnimatedStyle(() => {
    const bottom = interpolate(shadow.value, [0.9, 1], [2, -2]);

    return { bottom: bottom };
  });

  const bubbleStyle = useAnimatedStyle(() => {
    const bottom = interpolate(shadow.value, [0.9, 1], [-2, 2]);

    return { bottom: bottom };
  });

  return (
    <View
      style={{
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        gap: 24,
        top: -24,
      }}
    >
      <Animated.View style={bubbleStyle}>
        <Bubbles />
      </Animated.View>
      <Animated.View style={logoStyle}>
        <Logo />
      </Animated.View>
      <Animated.View style={shadowStyle}>
        <Shadow />
      </Animated.View>
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 18, fontFamily: "Montserrat_600SemiBold" }}>
          Жагсаалт Хоосон байна.
        </Text>
        <Text style={{ fontFamily: "Montserrat_500Medium" }}>
          Жагсаалтад авах зүйлсээ нэмээрэй.
        </Text>
      </View>
    </View>
  );
};
export default EmptyList;
