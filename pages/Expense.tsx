import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import {
  useFonts,
  Montserrat_800ExtraBold,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
} from "@expo-google-fonts/montserrat";
import { ItemExpenseComponent } from "../components/ItemExpense";

const ExpensePage = () => {
  let [fontsLoaded, error] = useFonts({
    Montserrat_800ExtraBold,
    Montserrat_600SemiBold,
    Montserrat_500Medium,
  });

  if (!fontsLoaded) {
    return <Text>LOADING...</Text>;
  }

  return (
    <SafeAreaView style={{ width: "100%" }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text}>2022</Text>
          <View style={styles.line}></View>
        </View>
        <ItemExpenseComponent big month="Тавдугаар сар" cost={200000} />
        <ItemExpenseComponent big month="Дөрөвдүгээр сар" cost={300000} />
        <ItemExpenseComponent big={false} month="Тавдугаар сар" cost={200000} />
        <ItemExpenseComponent big={false} month="Тавдугаар сар" cost={200000} />
        <ItemExpenseComponent
          big={false}
          month="Дөрөвдүгээр сар"
          cost={300000}
        />
        <View style={styles.header}>
          <Text style={styles.text}>2023</Text>
          <View style={styles.line}></View>
        </View>
        <View style={styles.itemCompSmall}></View>
        <View style={styles.itemCompSmall}></View>
        <View style={styles.itemCompSmall}></View>
        <View style={styles.itemCompSmall}></View>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 24,
  },
  text: {
    fontSize: 24,
    fontFamily: "Montserrat_800ExtraBold",
    paddingLeft: 24,
    paddingRight: 24,
    color: "#5CB881",
  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: "#5CB881",
  },
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
});

export default ExpensePage;
