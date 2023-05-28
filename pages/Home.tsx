import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, TextInput } from "react-native";
import SearchIcon from "../assets/Search";
import FilterIcon from "../assets/Filter";
import SwipeListItems from "../components/SwipeListItem";
import Loading from "../components/Loading";
import Bottombar from "../components/Footer";

const data = [
  {
    productId: "6e7b5e65-375d-45dd-afe9-c497ae85eb25",
    productName: "Монгол сүү",
    category: "dairyProducts",
    createdAt: 1683716265200,
    price: 3000,
    amount: 1,
    creatorName: "Tergel",
    familyId: "ff1709c1-5ce9-4402-a0d9-7fac0ef56c6d",
    message: "i want it",
    isBought: false,
  },
  {
    productId: "6519de7c-01e8-4a2d-8488-77a061b181dc",
    productName: "Талх",
    category: "bakeryProducts",
    createdAt: 1683716265300,
    price: 5000,
    amount: 2,
    creatorName: "Tergel",
    familyId: "ff1709c1-5ce9-4402-a0d9-7fac0ef56c6d",
    message: "i want it too",
    isBought: false,
  },
  {
    productId: "7519de7c-01e8-4a2d-8488-77a061b181dc",
    productName: "Мах",
    category: "meatProducts",
    createdAt: 1683716265400,
    price: 12000,
    amount: 3,
    creatorName: "Tergel",
    familyId: "ff1709c1-5ce9-4402-a0d9-7fac0ef56c6d",
    message: "i want it more",
    isBought: false,
  },
  {
    productId: "8519de7c-01e8-4a2d-8488-77a061b181dc",
    productName: "Жимс",
    category: "fruitsVegetables",
    createdAt: 1683716265500,
    price: 3000,
    amount: 1,
    creatorName: "Tergel",
    familyId: "ff1709c1-5ce9-4402-a0d9-7fac0ef56c6d",
    message: "i want it more and more",
    isBought: false,
  },
  {
    productId: "5180f874-caa7-4708-a87d-6eff6fb0eb88",
    productName: "Jelly",
    category: "sweets",
    createdAt: "2023-05-27T12:21:23.928Z",
    price: 5000,
    amount: 1,
    creatorName: "Tergel",
    familyId: "ff1709c1-5ce9-4402-a0d9-7fac0ef56c6d",
    message: "i don't want it",
    isBought: false,
  },
];

const HomeScreen = () => {
  const [filteredDataSource, setFilteredDataSource] = useState(data);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const searchFilterFunction = (text: string) => {
    if (text) {
      const newData = data.filter((item) => {
        const itemData = item.productName
          ? item.productName.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(data);
      setSearch(text);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.search}>
          <TextInput
            style={styles.input}
            placeholder="Хайх"
            onChangeText={(text) => searchFilterFunction(text)}
            value={search}
          />
          <SearchIcon />
        </View>
        <View style={{ marginLeft: 24 }}>
          <FilterIcon />
        </View>
      </View>
      <SwipeListItems filteredDataSource={filteredDataSource} />
      <Bottombar />
      {loading && <Loading />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
  },
  searchContainer: {
    width: "100%",
    marginTop: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  search: {
    width: "70%",
    height: 48,
    borderColor: "#D3D3D3",
    borderWidth: 1,
    borderRadius: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12,
  },
  input: {
    width: "85%",
    fontFamily: "Montserrat_500Medium",
  },
});

export default HomeScreen;
