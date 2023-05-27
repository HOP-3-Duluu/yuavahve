import React from "react";
import { View, Pressable, ScrollView, StyleSheet } from "react-native";
import MeatProducts from "../assets/MeatProducts";
import DairyProducts from "../assets/DairyProducts";
import BakeryProducts from "../assets/BakeryProducts";
import FruitsVegetables from "../assets/FruitsVegetables";
import Beverages from "../assets/Beverages";
import Sweets from "../assets/Sweets";
import PersonalCare from "../assets/PersonalCare";
import CleaningSupplies from "../assets/CleaningSupplies";

const IconCategory = ({
  category,
  categoryInput,
  setCategoryInput,
}: {
  category: string;
  categoryInput: string;
  setCategoryInput: any;
}) => {
  switch (category) {
    case "meatProducts":
      return <MeatProducts />;
    case "dairyProducts":
      return <DairyProducts />;
    case "bakeryProducts":
      return <BakeryProducts />;
    case "fruitsVegetables":
      return <FruitsVegetables />;
    case "beverages":
      return <Beverages />;
    case "sweets":
      return <Sweets />;
    case "personalCare":
      return <PersonalCare />;
    case "cleaningSupplies":
      return <CleaningSupplies />;
    case "choose":
      return (
        <ScrollView style={{ height: 64 }} horizontal>
          <Pressable
            style={[
              styles.iconContainer,
              {
                backgroundColor:
                  categoryInput === "meatProducts" ? "#ADDBC0" : "#FFF",
                borderColor:
                  categoryInput === "meatProducts" ? "#5CB881" : "#D3D3D3",
              },
            ]}
            onPress={() => setCategoryInput("meatProducts")}
          >
            <View style={{ height: 48, width: 48 }}>
              <MeatProducts />
            </View>
          </Pressable>
          <Pressable
            style={[
              styles.iconContainer,
              {
                backgroundColor:
                  categoryInput === "dairyProducts" ? "#ADDBC0" : "#FFF",
                borderColor:
                  categoryInput === "dairyProducts" ? "#5CB881" : "#D3D3D3",
              },
            ]}
            onPress={() => setCategoryInput("dairyProducts")}
          >
            <View style={{ height: 48, width: 48 }}>
              <DairyProducts />
            </View>
          </Pressable>
          <Pressable
            style={[
              styles.iconContainer,
              {
                backgroundColor:
                  categoryInput === "bakeryProducts" ? "#ADDBC0" : "#FFF",
                borderColor:
                  categoryInput === "bakeryProducts" ? "#5CB881" : "#D3D3D3",
              },
            ]}
            onPress={() => setCategoryInput("bakeryProducts")}
          >
            <View style={{ height: 48, width: 48 }}>
              <BakeryProducts />
            </View>
          </Pressable>
          <Pressable
            style={[
              styles.iconContainer,
              {
                backgroundColor:
                  categoryInput === "fruitsVegetables" ? "#ADDBC0" : "#FFF",
                borderColor:
                  categoryInput === "fruitsVegetables" ? "#5CB881" : "#D3D3D3",
              },
            ]}
            onPress={() => setCategoryInput("fruitsVegetables")}
          >
            <View style={{ height: 48, width: 48 }}>
              <FruitsVegetables />
            </View>
          </Pressable>
          <Pressable
            style={[
              styles.iconContainer,
              {
                backgroundColor:
                  categoryInput === "beverages" ? "#ADDBC0" : "#FFF",
                borderColor:
                  categoryInput === "beverages" ? "#5CB881" : "#D3D3D3",
              },
            ]}
            onPress={() => setCategoryInput("beverages")}
          >
            <View style={{ height: 48, width: 48 }}>
              <Beverages />
            </View>
          </Pressable>
          <Pressable
            style={[
              styles.iconContainer,
              {
                backgroundColor:
                  categoryInput === "sweets" ? "#ADDBC0" : "#FFF",
                borderColor: categoryInput === "sweets" ? "#5CB881" : "#D3D3D3",
              },
            ]}
            onPress={() => setCategoryInput("sweets")}
          >
            <View style={{ height: 48, width: 48 }}>
              <Sweets />
            </View>
          </Pressable>
          <Pressable
            style={[
              styles.iconContainer,
              {
                backgroundColor:
                  categoryInput === "personalCare" ? "#ADDBC0" : "#FFF",
                borderColor:
                  categoryInput === "personalCare" ? "#5CB881" : "#D3D3D3",
              },
            ]}
            onPress={() => setCategoryInput("personalCare")}
          >
            <View style={{ height: 48, width: 48 }}>
              <PersonalCare />
            </View>
          </Pressable>
          <Pressable
            style={[
              styles.iconContainer,
              {
                marginRight: 0,
                backgroundColor:
                  categoryInput === "cleaningSupplies" ? "#ADDBC0" : "#FFF",
                borderColor:
                  categoryInput === "cleaningSupplies" ? "#5CB881" : "#D3D3D3",
              },
            ]}
            onPress={() => setCategoryInput("cleaningSupplies")}
          >
            <View style={{ height: 48, width: 48 }}>
              <CleaningSupplies />
            </View>
          </Pressable>
        </ScrollView>
      );
    default:
      return <></>;
  }
};

export default IconCategory;

const styles = StyleSheet.create({
  iconContainer: {
    width: 64,
    height: 64,
    marginRight: 12,
    borderWidth: 1,
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
  },
});
