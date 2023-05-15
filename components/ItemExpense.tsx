import { StyleSheet, View, Text } from "react-native";
import ArrowLeft from "../assets/ArrowLeft";

export const ItemExpenseComponent = ({
  big,
  month,
  cost,
  index,
}: {
  big: boolean;
  month: string;
  cost: number;
  index: number;
}) => {
  return big ? (
    <View style={styles.itemComp}>
      <View style={styles.dataContainer}>
        <View>
          <Text>{index === 0 ? "Энэ сар" : "Өмнө сар"}</Text>
          <Text style={styles.text}>{month}</Text>
        </View>
        <Text style={styles.cost}>{cost}₮</Text>
        <ArrowLeft />
      </View>
    </View>
  ) : (
    <View style={styles.itemCompSmall}>
      <View style={styles.smallDataContainer}>
        <Text style={styles.smallText}>{month}</Text>
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
    width: "73%",
    height: "100%",
    left: "150%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  smallDataContainer: {
    width: "55%",
    height: "100%",
    left: "510%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontFamily: "Montserrat_600SemiBold",
  },
  smallText: {
    fontSize: 12,
    fontFamily: "Montserrat_500Medium",
  },
  cost: {
    fontSize: 16,
    color: "#5CB881",
    fontFamily: "Montserrat_600SemiBold",
  },
});
