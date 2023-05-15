import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, ScrollView } from "react-native";
import {
  useFonts,
  Montserrat_800ExtraBold,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
} from "@expo-google-fonts/montserrat";
import { ItemExpenseComponent } from "../components/ItemExpense";

const data = [
  {
    year: 2023,
    month: "Тавдугаар сар",
    cost: 300000,
  },
  {
    year: 2023,
    month: "Дөрөвдүгээр сар",
    cost: 400000,
  },
  {
    year: 2023,
    month: "Гуравдугаар сар",
    cost: 200000,
  },
  {
    year: 2023,
    month: "Хоёрдугаар сар",
    cost: 300000,
  },
  {
    year: 2023,
    month: "Нэгдүгээр сар",
    cost: 100000,
  },
  {
    year: 2022,
    month: "Арван Хоёрдугаар сар",
    cost: 200000,
  },
  {
    year: 2022,
    month: "Арван Нэгдүгээр сар",
    cost: 200000,
  },
  {
    year: 2022,
    month: "Аравдугаар сар",
    cost: 200000,
  },
  {
    year: 2022,
    month: "Есдүгээр сар",
    cost: 200000,
  },
  {
    year: 2022,
    month: "Наймдугаар сар",
    cost: 200000,
  },
  {
    year: 2022,
    month: "Долдугаар сар",
    cost: 200000,
  },
  {
    year: 2022,
    month: "Зургаадугаар сар",
    cost: 200000,
  },
  {
    year: 2022,
    month: "Тавдугаар сар",
    cost: 200000,
  },
];

const ExpensePage = () => {
  let [fontsLoaded, error] = useFonts({
    Montserrat_800ExtraBold,
    Montserrat_600SemiBold,
    Montserrat_500Medium,
  });

  if (!fontsLoaded) {
    return <Text>LOADING...</Text>;
  }

  if (error) {
    return <Text>{JSON.stringify(error)}</Text>;
  }

  return (
    <SafeAreaView style={{ width: "100%" }}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.text}>{2023}</Text>
            <View style={styles.line}></View>
          </View>
          {data.map((el, index) => {
            if (el.year === 2023)
              return (
                <ItemExpenseComponent
                  big={index < 2 && true}
                  month={el.month}
                  cost={el.cost}
                  index={index}
                />
              );
          })}
          <View style={styles.header}>
            <Text style={styles.text}>{2022}</Text>
            <View style={styles.line}></View>
          </View>
          {data.map((el, index) => {
            if (el.year === 2022)
              return (
                <ItemExpenseComponent
                  big={index < 2 && true}
                  month={el.month}
                  cost={el.cost}
                  index={index}
                />
              );
          })}
          <View style={styles.header}>
            <Text style={styles.text}>{2021}</Text>
            <View style={styles.line}></View>
          </View>
          <View style={styles.header}>
            <Text style={styles.text}>{2020}</Text>
            <View style={styles.line}></View>
          </View>
          <View style={styles.header}>
            <Text style={styles.text}>{2019}</Text>
            <View style={styles.line}></View>
          </View>
          <View style={styles.header}>
            <Text style={styles.text}>{2018}</Text>
            <View style={styles.line}></View>
          </View>
          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    marginBottom: 48,
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
