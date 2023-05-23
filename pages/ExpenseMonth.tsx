import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, Dimensions, ScrollView } from "react-native";
import { LineChart } from "react-native-chart-kit";
import ArrowRight from "../assets/ArrowRight";

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
    date: 1683716265607,
    price: 5000,
    amount: 1,
  },
  {
    date: 1683716265607,
    price: 5000,
    amount: 1,
  },
  {
    date: 1683716265607,
    price: 30000,
    amount: 1,
  },
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
    date: 1683716265607,
    price: 5000,
    amount: 1,
  },
  {
    date: 1683716265607,
    price: 5000,
    amount: 1,
  },
  {
    date: 1683716265607,
    price: 30000,
    amount: 1,
  },
  {
    date: 1683716265607,
    price: 5000,
    amount: 1,
  },
  {
    date: 1683716265607,
    price: 5000,
    amount: 1,
  },
  {
    date: 1683716265607,
    price: 30000,
    amount: 1,
  },
  {
    date: 1683716265607,
    price: 30000,
    amount: 1,
  },
  {
    date: 1683716265607,
    price: 30000,
    amount: 1,
  },
  {
    date: 1683716265607,
    price: 30000,
    amount: 1,
  },
  {
    date: 1683716265607,
    price: 30000,
    amount: 1,
  },
];

const getAllDaysInMonth = (month: number, year: number) =>
  Array.from(
    { length: new Date(year, month, 0).getDate() },
    (_, i) => new Date(year, month - 1, i + 1)
  );

const ExpenseMonthPage = () => {
  const [daysOfMonth, setDaysOfMonth] = useState<any>([]);
  const [newData, setNewData] = useState<any>([]);
  const [showArrow, setShowArrow] = useState<boolean>(true);

  useEffect(() => {
    let arr = [];
    getAllDaysInMonth(5, 2023).map((el) => {
      arr.push(`${el.getDate()}-нд`);
    });
    setDaysOfMonth(arr);
  }, []);

  const handleScroll = (event: Object) => {
    const positionX = event.nativeEvent.contentOffset.x;
    positionX === 0 ? setShowArrow(true) : setShowArrow(false);
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#fff", height: "100%" }}>
      <View style={{ width: "100%", alignItems: "center", marginVertical: 24 }}>
        <Text style={{ fontFamily: "Montserrat_800ExtraBold", fontSize: 24 }}>
          {2023} оны {5}-р сар
        </Text>
      </View>
      <View style={{ justifyContent: "center" }}>
        <ScrollView horizontal onScroll={handleScroll}>
          <LineChart
            data={{
              labels: daysOfMonth,
              datasets: [
                {
                  data: [
                    10000, 0, 10000, 2000, 30000, 0, 10000, 5000, 10000, 0,
                    10000, 5000, 10000, 0, 10000, 5000, 10000, 0, 10000, 5000,
                    10000, 0, 10000, 5000, 10000, 0, 10000, 5000, 10000, 0,
                    10000,
                  ],
                },
              ],
            }}
            width={(Dimensions.get("window").width * daysOfMonth.length) / 6}
            height={220}
            yAxisLabel="₮"
            yAxisSuffix=""
            yAxisInterval={1}
            chartConfig={{
              backgroundColor: "#fff",
              backgroundGradientFrom: "#fff",
              backgroundGradientTo: "#fff",
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(92, 184, 129, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              propsForDots: {
                r: "5",
                strokeWidth: "0",
                stroke: "#5CB881",
              },
            }}
            bezier
            style={{ marginVertical: 8 }}
          />
        </ScrollView>
        <View
          style={[
            { position: "absolute", right: showArrow ? 24 : -36 },
            { transform: [{ scale: 1.4 }] },
          ]}
        >
          <ArrowRight />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ExpenseMonthPage;
