import React from "react";
import { Pressable, Text } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  useFonts,
  Montserrat_800ExtraBold,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
} from "@expo-google-fonts/montserrat";
import Setting from "./assets/Setting";
import ExpensePage from "./pages/Expense";
import Bottombar from "./components/Footer";
import Settings from "./pages/Settings";
import BackArrow from "./assets/BackArrow";

const Stack = createNativeStackNavigator();

const SettingsHeader = () => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.navigate("Settings")}>
      {Setting}
    </Pressable>
  );
};

const BackHeader = () => {
  const navigation = useNavigation();
  return <Pressable onPress={() => navigation.goBack()}>{BackArrow}</Pressable>;
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
      <Stack.Navigator>
        <Stack.Screen
          name="Expense"
          component={ExpensePage}
          options={({ route }) => ({
            title: "Юу авах вэ?",
            headerTintColor: "#5CB881",
            headerStyle: {
              backgroundColor: "white",
            },
            headerTitleStyle: {
              fontFamily: "Montserrat_600SemiBold",
              fontSize: 24,
            },
            headerShadowVisible: false,
            headerRight: SettingsHeader,
          })}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={({ route }) => ({
            title: "Тохиргоо",
            headerTintColor: "#5CB881",
            headerStyle: {
              backgroundColor: "white",
            },
            headerBackVisible: false,

            headerTitleStyle: {
              fontFamily: "Montserrat_600SemiBold",
              fontSize: 24,
            },
            headerShadowVisible: false,
            headerLeft: BackHeader,
          })}
        />
      </Stack.Navigator>
      <Bottombar />
    </NavigationContainer>
  );
};

export default App;
