import React from "react";
import {
  Pressable,
  View,
  Text,
  SafeAreaView,
  Dimensions,
  ScrollView,
} from "react-native";
import { LineChart } from "react-native-chart-kit";

const ExpenseMonthPage = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#fff", height: "100%" }}>
      <View style={{ width: "100%", alignItems: "center", marginVertical: 24 }}>
        <Text style={{ fontFamily: "Montserrat_800ExtraBold", fontSize: 24 }}>
          {2023} он
        </Text>
      </View>
      <View>
        <ScrollView horizontal>
          <LineChart
            data={{
              labels: [
                "1-р сар",
                "2-р сар",
                "3-р сар",
                "4-р сар",
                "5-р сар",
                "6-р сар",
                "7-р сар",
                "8-р сар",
                "9-р сар",
                "10-р сар",
                "11-р сар",
                "12-р сар",
              ],
              datasets: [
                {
                  data: [
                    100000 / 1000,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                  ],
                },
              ],
            }}
            width={Dimensions.get("window").width * 2}
            height={220}
            yAxisLabel="₮"
            yAxisSuffix="k"
            yAxisInterval={1}
            chartConfig={{
              backgroundColor: "#fff",
              backgroundGradientFrom: "#fff",
              backgroundGradientTo: "#fff",
              decimalPlaces: 2,
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
      </View>
    </SafeAreaView>
  );
};

export default ExpenseMonthPage;
