import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, ScrollView } from "react-native";
import { ItemExpenseComponent } from "../components/ItemExpense";

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
    date: 1683716265607,
    price: 5000,
    amount: 1,
  },
  {
    date: 1669824000000,
    price: 30000,
    amount: 1,
  },
  {
    date: 1669824000000,
    price: 20000,
    amount: 1,
  },
  {
    date: 1669824000000,
    price: 10000,
    amount: 1,
  },
  {
    date: 1667232000000,
    price: 1000,
    amount: 1,
  },
  {
    date: 1667232000000,
    price: 15000,
    amount: 1,
  },
];

const newMockData = [
  {
    year: 2023,
    data: [
      {
        month: 4,
        cost: 400000,
      },
      {
        month: 3,
        cost: 300000,
      },
      {
        month: 2,
        cost: 200000,
      },
      {
        month: 1,
        cost: 100000,
      },
    ],
  },
  {
    year: 2022,
    data: [
      {
        month: 12,
        cost: 250000,
      },
    ],
  },
];

const ExpensePage = () => {
  const [newData, setNewData] = useState([]);
  const date = new Date();
  useEffect(() => {
    data.map((el, index) => {
      const createdAt = new Date(el.date);
      const month = createdAt.getMonth() + 1;
      const year = createdAt.getFullYear();
      if (newData === []) {
        setNewData([...newData, { year: year }]);
      } else {
        newData.map((el, index) => {
          if (el.year === year) {
            console.log(year);
          }
        });
      }
    });
    console.log(newData);
  }, []);
  return (
    <SafeAreaView style={{ width: "100%", backgroundColor: "#fff" }}>
      <ScrollView>
        <View style={styles.container}>
          {newMockData.map((el, index) => {
            return (
              <>
                <View style={styles.header}>
                  <Text style={styles.text}>{el.year}</Text>
                  <View style={styles.line}></View>
                </View>
                {el.data.map((e, index) => (
                  <ItemExpenseComponent
                    big={
                      date.getFullYear() === el.year &&
                      date.getMonth() - 1 < e.month &&
                      true
                    }
                    month={e.month}
                    cost={e.cost}
                    index={index}
                  />
                ))}
              </>
            );
          })}
        </View>
      </ScrollView>
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
