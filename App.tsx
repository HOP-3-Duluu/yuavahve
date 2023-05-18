import React from "react";
import { Pressable, Text, View } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  useFonts,
  Montserrat_800ExtraBold,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
} from "@expo-google-fonts/montserrat";
import Setting from "./assets/Setting";
import Bottombar from "./components/Footer";
import ExpensePage from "./pages/Expense";
import ExpenseMonthPage from "./pages/ExpenseMonth";
import Settings from "./pages/Settings";
<<<<<<< HEAD
import HomeScreen from "./pages/Home";
=======
import BackArrow from "./assets/BackArrow";
>>>>>>> 05f0d15 (Front End finished)

const Stack = createNativeStackNavigator();

const SettingsHeader = () => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.navigate("Settings")}>
      {Setting}
    </Pressable>
  );
};

const App = () => {
  let [fontsLoaded, error] = useFonts({
    Montserrat_800ExtraBold,
    Montserrat_600SemiBold,
    Montserrat_500Medium,
  });

  if (!fontsLoaded) {
    return <Text>LOADING...</Text>;
  }

  if (error) {
    return <Text>{JSON.stringify(error)}</Text>;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          title: "Юу авах вэ?",
          headerTitleAlign: "center",
          headerTintColor: "#5CB881",
          headerStyle: {
            backgroundColor: "white",
          },
          headerTitleStyle: {
            fontFamily: "Montserrat_600SemiBold",
            fontSize: 24,
          },
          headerShadowVisible: false,
          headerRight: () => <SettingsHeader />,
        })}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Expense" component={ExpensePage} />
        <Stack.Screen name="ExpenseMonth" component={ExpenseMonthPage} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
      <Bottombar />
    </NavigationContainer>
  );
};

export default App;
