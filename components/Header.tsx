import React from "react";
import { View, Text, Button, Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Setting from "../assets/Setting";

const Stack = createNativeStackNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
}

function Header() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Header"
          component={HomeScreen}
          options={({ route }) => ({
            title: "Юу авах вэ?",
            headerTintColor: "#5CB881",
            headerStyle: {
              backgroundColor: "white",
            },
            headerTitleStyle: {
              fontFamily: "Montserrat",
              fontWeight: "bold",
              fontSize: 24,
            },
            headerShadowVisible: false,
            headerRight: () => (
              <Pressable onPress={() => alert("Setting ruu orson")}>
                {Setting}
              </Pressable>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Header;
