import React from "react";
import { SafeAreaView, StyleSheet, Text, View, TextInput } from "react-native";
import { GestureHandlerRootView, FlatList } from "react-native-gesture-handler";
import { SwipeListView } from "react-native-swipe-list-view";
import SearchIcon from "../assets/Search";
import FilterIcon from "../assets/Filter";
import ItemComponent from "../components/itemComponent";

const data = [
  {
    id: "6e7b5e65-375d-45dd-afe9-c497ae85eb25",
    productName: "Монгол сүү",
    category: "dairyProducts",
    createdAt: 1683716265200,
    price: 3000,
    amount: 1,
    creatorId: "d3453ea9-99e5-4fd6-ae86-c464df5c9071",
    familyId: "47c9c758-9c72-443c-8e8c-9f3693ad250d",
    message: "i want it",
    isBought: true,
  },
  {
    id: "6519de7c-01e8-4a2d-8488-77a061b181dc",
    productName: "Талх",
    category: "bakeryProducts",
    createdAt: 1683716265300,
    price: 5000,
    amount: 2,
    creatorId: "d3453ea9-99e5-4fd6-ae86-c464df5c9071",
    familyId: "47c9c758-9c72-443c-8e8c-9f3693ad250d",
    message: "i want it too",
    isBought: false,
  },
  {
    id: "7519de7c-01e8-4a2d-8488-77a061b181dc",
    productName: "Мах",
    category: "meatProducts",
    createdAt: 1683716265400,
    price: 12000,
    amount: 3,
    creatorId: "d3453ea9-99e5-4fd6-ae86-c464df5c9071",
    familyId: "47c9c758-9c72-443c-8e8c-9f3693ad250d",
    message: "i want it more",
    isBought: false,
  },
  {
    id: "8519de7c-01e8-4a2d-8488-77a061b181dc",
    productName: "Жимс",
    category: "fruitsVegetables",
    createdAt: 1683716265500,
    price: 3000,
    amount: 1,
    creatorId: "d3453ea9-99e5-4fd6-ae86-c464df5c9071",
    familyId: "47c9c758-9c72-443c-8e8c-9f3693ad250d",
    message: "i want it more and more",
    isBought: false,
  },
  {
    id: "9519de7c-01e8-4a2d-8488-77a061b181dc",
    productName: "Төмс",
    category: "fruitsVegetables",
    createdAt: 1683716265600,
    price: 5000,
    amount: 1,
    creatorId: "d3453ea9-99e5-4fd6-ae86-c464df5c9071",
    familyId: "47c9c758-9c72-443c-8e8c-9f3693ad250d",
    message: "i don't want it",
    isBought: false,
  },
];

const renderHiddenItem = (data, rowMap) => (
  <View style={styles.rowBack}>
      <Text>Left</Text>
      {/* <TouchableOpacity
          style={[styles.backRightBtn, styles.backRightBtnLeft]}
          onPress={() => closeRow(rowMap, data.item.key)}
      >
          <Text style={styles.backTextWhite}>Close</Text>
      </TouchableOpacity>
      <TouchableOpacity
          style={[styles.backRightBtn, styles.backRightBtnRight]}
          onPress={() => deleteRow(rowMap, data.item.key)}
      >
          <Text style={styles.backTextWhite}>Delete</Text>
      </TouchableOpacity> */}
  </View>
);

const HomeScreen = () => {
  return (
    <GestureHandlerRootView>
      <SafeAreaView style={styles.container}>
        {/* <FlatList
          style={{ width: "100%" }}
          showsVerticalScrollIndicator={false}
          data={data}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={() => (
            <View style={styles.searchContainer}>
              <View style={styles.search}>
                <TextInput style={styles.input} />
                <SearchIcon />
              </View>
              <View style={{ marginLeft: 24 }}>
                <FilterIcon />
              </View>
            </View>
          )}
          renderItem={({ item }) => (
            <ItemComponent
              name={item.productName}
              amount={item.amount}
              isBought={item.isBought}
              createdAt={item.createdAt}
            />
          )}
          ListFooterComponent={() => <View style={{ height: 120 }}></View>}
          ListEmptyComponent={() => (
            <View>
              <Text>LIST IS EMPTY</Text>
            </View>
          )}
        /> */}
        <SwipeListView
          data={data}
          renderItem={({ item }) => (
            <ItemComponent
              name={item.productName}
              amount={item.amount}
              isBought={item.isBought}
              createdAt={item.createdAt}
            />
          )}
          renderHiddenItem={renderHiddenItem}
          leftOpenValue={0}
          tension={0}
          rightOpenValue={-56}
          previewRowKey={"0"}
          previewOpenValue={-40}
          previewOpenDelay={3000}
          // onRowDidOpen={onRowDidOpen}
        />
      </SafeAreaView>
    </GestureHandlerRootView>
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
  },
});

export default HomeScreen;
