import { StyleSheet, View, Text } from "react-native";

export const ItemExpenseComponent = ({
  big,
  month,
  cost,
}: {
  big: boolean;
  month: string;
  cost: number;
}) => {
  return big ? (
    <View style={styles.itemComp}>
      <View style={styles.dataContainer}>
        <Text style={styles.text}>{month}</Text>
        <Text style={styles.cost}>{cost}₮</Text>
      </View>
    </View>
  ) : (
    <View style={styles.itemCompSmall}>
      <View style={styles.dataContainer}>
        <Text style={styles.text}>{month}</Text>
        <Text style={styles.cost}>{cost}₮</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemComp: {
    width: "100%",
    height: 64,
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderRadius: 32,
    marginTop: 24,
    left: "-20%",
  },
  itemCompSmall: {
    width: "100%",
    height: 36,
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderRadius: 32,
    marginTop: 24,
    left: "-40%",
  },
  dataContainer: {
    width: "72%",
    height: "100%",
    left: "140%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontSize: 12,
    fontFamily: "Montserrat_500Medium",
  },
  cost: {
    fontSize: 16,
    color: "#5CB881",
    fontFamily: "Montserrat_600SemiBold",
  },
});
