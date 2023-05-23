import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import ArrowRight from "../assets/ArrowRight";
import { useNavigation } from "@react-navigation/native";

export const ItemExpenseComponent = ({
  big,
  year,
  text,
  cost,
  key,
}: {
  big: boolean;
  year: number;
  text: string;
  cost: number;
  key: number;
}) => {
  const navigation = useNavigation();
  return big ? (
    <Pressable
      style={styles.itemComp}
      onPress={() =>
        navigation.navigate("ExpenseMonth", { year, month: text.split("-")[0] })
      }
    >
      <View style={styles.dataContainer}>
        <View>
          <Text>{key === 0 ? "Энэ сар" : "Өмнөх сар"}</Text>
          <Text style={styles.text}>{text}</Text>
        </View>
        <Text style={styles.cost}>{cost}₮</Text>
        <ArrowRight />
      </View>
    </Pressable>
  ) : (
    <View style={styles.itemCompSmall}>
      <View style={styles.smallDataContainer}>
        <Text style={styles.smallText}>{text}</Text>
        <Text style={styles.cost}>{cost}₮</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemComp: {
    width: "80%",
    height: 64,
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderTopRightRadius: 32,
    borderBottomRightRadius: 32,
    borderLeftWidth: 0,
    padding: 12,
    marginTop: 24,
  },
  itemCompSmall: {
    width: "65%",
    height: 36,
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderTopRightRadius: 32,
    borderBottomRightRadius: 32,
    borderLeftWidth: 0,
    paddingLeft: 12,
    paddingRight: 12,
    marginTop: 24,
  },
  dataContainer: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  smallDataContainer: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontFamily: "Montserrat_600SemiBold",
  },
  smallText: {
    fontSize: 13,
    fontFamily: "Montserrat_500Medium",
  },
  cost: {
    fontSize: 16,
    color: "#5CB881",
    fontFamily: "Montserrat_600SemiBold",
  },
});
