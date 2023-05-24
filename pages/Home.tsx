import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import SearchIcon from "../assets/Search";
import FilterIcon from "../assets/Filter";
import ItemComponent from "../components/itemComponent";

const HomeScreen = () => {
  return (
    <GestureHandlerRootView>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.searchContainer}>
            <View style={styles.search}>
              <TextInput style={styles.input} />
              <SearchIcon />
            </View>
            <View style={{ marginLeft: 24 }}>
              <FilterIcon />
            </View>
          </View>
          <ItemComponent />
          <ItemComponent />
          <ItemComponent />
          <ItemComponent />
          <ItemComponent />
          <ItemComponent />
          <ItemComponent />
        </ScrollView>
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
