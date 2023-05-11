import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ExpensePage from "./pages/Expense";
import Bottombar from "./components/Footer";

export default function App() {
  return (
    <View style={styles.container}>
      <ExpensePage></ExpensePage>
      <StatusBar style="auto" />
      <Bottombar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
