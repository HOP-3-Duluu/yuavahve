import React, { useEffect, useState, useMemo } from "react";
import { View, Text, SafeAreaView, Dimensions, ScrollView } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { ItemExpenseComponent } from "../components/ItemExpense";
import ArrowRight from "../assets/ArrowRight";
import Bottombar from "../components/Footer";

const data = [
  {
    date: 1683716265607,
    price: 12000,
    amount: 1,
  },
  {
    date: 1683716265607,
    price: 20000,
    amount: 1,
  },
];

const dataGroupByDate = (data) => {
  const groupByDay = data.reduce((group, item) => {
    const { date } = item;
    const d = new Date(date);
    const day = d.getDate();

    group[day] = group[day] ?? [];
    group[day].push(item);
    return group;
  }, {} as any);
  return groupByDay;
};

const getAllDaysInMonth = (month: number, year: number) =>
  Array.from(
    { length: new Date(year, month, 0).getDate() },
    (_, i) => new Date(year, month - 1, i + 1)
  );

const ExpenseMonthPage = ({ route }) => {
  const [daysOfMonth, setDaysOfMonth] = useState<any>([]);
  const [onlyPriceData, setOnlyPriceData] = useState<any>([]);
  const [showArrow, setShowArrow] = useState<boolean>(true);
  const groupedData = useMemo(() => dataGroupByDate(data), []);

  useEffect(() => {
    let arr = [];
    getAllDaysInMonth(route.params?.month, route.params?.year).map((el) => {
      arr.push(`${el.getDate()}-нд`);
    });
    setDaysOfMonth(arr);
  }, []);

  useEffect(() => {
    daysOfMonth.map((el, index) => {
      let day = el.split("-")[0];
      let addedPrice = 0;
      groupedData[day]?.map((e) => (addedPrice = addedPrice + e.price));
      setOnlyPriceData((onlyPriceData) => [
        ...onlyPriceData,
        { price: addedPrice, day },
      ]);
    });
  }, [daysOfMonth]);

  if (onlyPriceData.length === 0) {
    return (
      <View
        style={{
          width: "100%",
          height: "100%",
          alignItems: "center",
          backgroundColor: "#fff",
        }}
      >
        <View
          style={{ width: "100%", alignItems: "center", marginVertical: 24 }}
        >
          <Text style={{ fontFamily: "Montserrat_800ExtraBold", fontSize: 24 }}>
            {route.params?.year} оны {route.params?.month}-р сар
          </Text>
        </View>
        <View
          style={{
            height: "70%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 24,
              fontFamily: "Montserrat_800ExtraBold",
              color: "#5CB881",
            }}
          >
            Мэдээлэл олдсонгүй.
          </Text>
        </View>
      </View>
    );
  }

  const handleScroll = (event: Object) => {
    const positionX = event.nativeEvent.contentOffset.x;
    positionX === 0 ? setShowArrow(true) : setShowArrow(false);
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#fff", height: "100%" }}>
      <ScrollView>
        <View
          style={{ width: "100%", alignItems: "center", marginVertical: 24 }}
        >
          <Text style={{ fontFamily: "Montserrat_800ExtraBold", fontSize: 24 }}>
            {route.params?.year} оны {route.params?.month}-р сар
          </Text>
        </View>
        <View style={{ justifyContent: "center" }}>
          <ScrollView horizontal onScroll={handleScroll}>
            <LineChart
              data={{
                labels: daysOfMonth,
                datasets: [
                  {
                    data: onlyPriceData.map((el, index) => el?.price),
                  },
                ],
              }}
              width={(Dimensions.get("window").width * daysOfMonth.length) / 6}
              height={240}
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
        {onlyPriceData?.map((el, index) => (
          <ItemExpenseComponent
            big={false}
            text={`${route.params.month}-р сарын ${el.day}-нд`}
            cost={el.price}
            key={index}
          />
        ))}
        <View style={{ height: 120 }}></View>
      </ScrollView>
      <Bottombar />
    </SafeAreaView>
  );
};

export default ExpenseMonthPage;
