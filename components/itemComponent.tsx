import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Swipeable, PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
} from "react-native-reanimated";
import TrashIcon from "../assets/Trash";
import moment from "moment";

const data = [
  {
    productName: "Монгол сүү",
  },
];

const LeftActions = () => {
  return (
    <View style={{ width: 1, height: "100%", backgroundColor: "#000" }}></View>
  );
};

const RightActions = () => {
  return (
    <View
      style={{
        width: 56,
        height: "100%",
        paddingTop: 80,
        paddingHorizontal: 12,
      }}
    >
      <TrashIcon />
    </View>
  );
};

const ItemComponent = ({
  name,
  amount,
  isBought,
  createdAt,
}: {
  name: string;
  amount: number;
  isBought: boolean;
  createdAt: any;
}) => {
  const [activateDelete, setActivateDelete] = useState(false);
  const itemColor = useSharedValue("#fff");
  const itemBorderColor = useSharedValue("#D3D3D3");

  const animationStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: withTiming(itemColor.value, {
        duration: 200,
        easing: Easing.bezier(0, 0, 0, 1),
      }),
      borderColor: withTiming(itemBorderColor.value, {
        duration: 200,
        easing: Easing.bezier(0, 0, 0, 1),
      }),
    };
  });

  useEffect(() => {
    if (activateDelete) {
      itemColor.value = "#F7B4B4";
      itemBorderColor.value = "#EE6969";
    } else {
      if (isBought) {
        itemColor.value = "#ADDBC0";
        itemBorderColor.value = "#5CB881";
      } else {
        itemColor.value = "#fff";
        itemBorderColor.value = "#D3D3D3";
      }
    }
  }, [isBought, activateDelete]);

  return (
    <View style={{ left: "-20%", width: "100%" }}>
      {/* <Swipeable
        // renderLeftActions={LeftActions}
        renderRightActions={RightActions}
        friction={5}
        onSwipeableOpen={(event) => {
          if (event === "right") {
            setActivateDelete(true);
          } else {
            setActivateDelete(false);
          }
        }}
        onSwipeableClose={(event) => {
          setActivateDelete(false);
        }}
      > */}
      <View style={styles.itemContainer}>
        <Animated.View
          style={[styles.iconContainer, animationStyle]}
        ></Animated.View>
        <Animated.View style={[styles.item, animationStyle]}>
          <View style={styles.textContainer}>
            <Text style={styles.itemName}>{name}</Text>
            <Text style={styles.itemAmount}>{amount}ш</Text>
          </View>
          <View style={styles.textBottomContainer}>
            <Text style={styles.itemCreator}>Ээжийн хүү</Text>
            <Text style={styles.itemDate}>
              {moment(createdAt).format("LTS")}
            </Text>
          </View>
        </Animated.View>
      </View>
      {/* </Swipeable> */}
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: "100%",
  },
  iconContainer: {
    width: 64,
    height: 64,
    backgroundColor: "#fff",
    borderColor: "#D3D3D3",
    borderWidth: 1,
    borderRadius: 32,
    left: "25%",
    bottom: -32,
    zIndex: 1,
  },
  item: {
    width: "100%",
    height: 74,
    backgroundColor: "#fff",
    borderColor: "#D3D3D3",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
  },
  textContainer: {
    position: "absolute",
    width: "56%",
    right: 12,
    padding: 12,
    paddingBottom: 0,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textBottomContainer: {
    position: "absolute",
    width: "77%",
    right: 12,
    bottom: 12,
    padding: 12,
    paddingBottom: 0,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemName: {
    fontFamily: "Montserrat_600SemiBold",
    left: "22%",
  },
  itemAmount: {
    fontFamily: "Montserrat_800ExtraBold",
  },
  itemCreator: {
    fontFamily: "Montserrat_500Medium",
  },
  itemDate: {
    color: "black",
    fontFamily: "Montserrat_500Medium",
    opacity: 0.3,
  },
});

export default ItemComponent;
