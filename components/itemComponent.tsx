import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ItemComponent = () => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.iconContainer}></View>
      <View style={styles.item}>
        <View style={styles.textContainer}>
          <Text style={styles.itemName}>Монгол сүү</Text>
          <Text style={styles.itemAmount}>2ш</Text>
        </View>
      </View>
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
    left: 16,
    bottom: -32,
    zIndex: 1,
  },
  item: {
    width: "100%",
    height: 74,
    left: "-20%",
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
});

export default ItemComponent;
