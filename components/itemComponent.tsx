import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Swipeable } from "react-native-gesture-handler";

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
      style={{ width: 32, height: "100%", backgroundColor: "#ff0000" }}
    ></View>
  );
};

const ItemComponent = () => {
  return (
    <View style={{ left: "-20%", width: "120%" }}>
      <Swipeable
        renderLeftActions={LeftActions}
        renderRightActions={RightActions}
        friction={5}
      >
        <View style={styles.itemContainer}>
          <View style={styles.iconContainer}></View>
          <View style={styles.item}>
            <View style={styles.textContainer}>
              <Text style={styles.itemName}>Монгол сүү</Text>
              <Text style={styles.itemAmount}>2ш</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.itemCreator}>Ээжийн хүү</Text>
              <Text style={styles.itemDate}>16:42:20</Text>
            </View>
          </View>
        </View>
      </Swipeable>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: "80%",
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
    borderColor: "#D3D3D3",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
  },
  textContainer: {
    width: "56%",
    left: "200%",
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
