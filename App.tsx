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
import ExpenseMonthPage from "./pages/ExpenseMonth";
import Settings from "./pages/Settings";
import HomeScreen from "./pages/Home";
import Loading from "./components/Loading";
import Login from "./pages/Login";
import { Provider, useAuthContext } from "./providers/authContext";
import GroupScreen from "./pages/GroupScreen";

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
  const { user } = useAuthContext();
  let [fontsLoaded, error] = useFonts({
    Montserrat_800ExtraBold,
    Montserrat_600SemiBold,
    Montserrat_500Medium,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  if (error) {
    return <Text>{JSON.stringify(error)}</Text>;
  }
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator
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
            headerRight: () => {
              if (route.name === "Login" || route.name === "Settings") {
                return <></>;
              } else {
                return <SettingsHeader />;
              }
            },
          })}
        >
          {user.userId !== undefined && (
            <Stack.Screen name="Login" component={Login} />
          )}
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Expense" component={ExpensePage} />
          <Stack.Screen name="ExpenseMonth" component={ExpenseMonthPage} />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="Group" component={GroupScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
