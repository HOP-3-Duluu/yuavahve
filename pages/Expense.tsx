import React, { useMemo } from "react";
import { SafeAreaView, StyleSheet, Text, View, ScrollView } from "react-native";
import { ItemExpenseComponent } from "../components/ItemExpense";
import Bottombar from "../components/Footer";

const data = [
  {
    date: 1683716265607,
    price: 3000,
    amount: 1,
  },
  {
    date: 1683716265607,
    price: 5000,
    amount: 1,
  },
  {
    date: 1683716265607,
    price: 3000,
    amount: 1,
  },
  {
    date: 1683716265607,
    price: 12000,
    amount: 1,
  },
  {
    date: 1683716265607,
    price: 5000,
    amount: 1,
  },
  {
    date: 1683716265607,
    price: 7000,
    amount: 1,
  },
  {
    date: 1683716265607,
    price: 5000,
    amount: 1,
  },
  {
    date: 1683716265607,
    price: 10000,
    amount: 1,
  },
  {
    date: 1680278400000,
    price: 5000,
    amount: 1,
  },
  {
    date: 1680278400000,
    price: 5000,
    amount: 1,
  },
  {
    date: 1680278400000,
    price: 5000,
    amount: 1,
  },
  {
    date: 1677600000000,
    price: 30000,
    amount: 1,
  },
];

type ExpenseData = {
  date: number;
  price: number;
  amount: number;
};

const convert = (data: ExpenseData[]) => {
  const groupByYear = data.reduce((group, item) => {
    const { date } = item;
    const d = new Date(date);
    const year = d.getFullYear();
    const month = d.getMonth() + 1;

    group[year] = group[year] ?? {};

    group[year][month] = group[year][month] ?? [];
    group[year][month].push(item);

    return group;
  }, {} as any);
  return groupByYear;
};

const ExpensePage = () => {
  const date = new Date();
  const newData = useMemo(() => convert(data), []);

  return (
    <SafeAreaView
      style={{ width: "100%", height: "100%", backgroundColor: "#fff" }}
    >
      <ScrollView>
        <View style={styles.container}>
          <View style={{ padding: 24, paddingLeft: 12, paddingBottom: 0 }}>
            <Text
              style={{ fontFamily: "Montserrat_600SemiBold", fontSize: 16 }}
            >
              <Text style={{ fontFamily: "Montserrat_500Medium" }}>
                {"Өнөөдөр: "}
              </Text>
              {`${date.getFullYear()} оны ${
                date.getMonth() + 1
              }-р сарын ${date.getDate()}`}
            </Text>
          </View>
          {Object.keys(newData)
            .reverse()
            ?.map((years) => {
              return (
                <>
                  <View style={styles.header}>
                    <Text style={styles.text}>{years}</Text>
                    <View style={styles.line}></View>
                  </View>
                  {Object.keys(newData[years])
                    .reverse()
                    .map((months, index) => {
                      let finalCost = 0;
                      newData[years][months].map(
                        (el) => (finalCost = finalCost + el.price * el.amount)
                      );
                      return (
                        <ItemExpenseComponent
                          big={
                            date.getFullYear() === Number(years) &&
                            date.getMonth() - 1 < Number(months) &&
                            true
                          }
                          text={`${months}-р сар`}
                          year={Number(years)}
                          cost={finalCost}
                          key={index}
                        />
                      );
                    })}
                </>
              );
            })}
        </View>
      </ScrollView>
      <Bottombar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    marginBottom: 80,
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
});

export default ExpensePage;
