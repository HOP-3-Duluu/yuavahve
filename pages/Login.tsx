import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  SafeAreaView,
  StyleSheet,
  useWindowDimensions,
  TextInput,
} from "react-native";
import Profile from "../assets/Profile";
import MaskInput, { Masks } from "react-native-mask-input";
import { ScrollView } from "react-native-gesture-handler";
import { useAuthContext } from "../providers/authContext";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const { width, height } = useWindowDimensions();
  const navigation = useNavigation();
  const { signUp } = useAuthContext();
  const [bday, setBday] = useState("");
  const [text, setText] = useState("");
  const Continue = async () => {
    if (text !== "" && bday !== "") {
      await signUp(text, bday);
      navigation.navigate("Home");
    }
  };

  return (
    <SafeAreaView
      style={{
        width: width,
        height: height,
        backgroundColor: "#fff",
      }}
    >
      <ScrollView style={{ width: "100%" }}>
        <View style={{ gap: 30, alignItems: "center" }}>
          <Text style={styles.text}>Сайн уу?</Text>
          <View style={styles.container}>
            <Profile width={128} />
            <Text style={styles.text2}>Нэр</Text>
            <TextInput
              style={styles.input}
              placeholder="Нэр"
              onChangeText={(newText) => setText(newText)}
            />
            <Text style={styles.text2}>Төрсөн өдөр</Text>
            <MaskInput
              style={styles.input}
              placeholder="Он/сар/өдөр"
              value={bday}
              onChangeText={(masked, unmasked) => {
                setBday(masked);
              }}
              mask={Masks.DATE_YYYYMMDD}
              keyboardType="numeric"
            />
            <Pressable onPress={Continue} style={styles.button}>
              <Text
                style={{
                  textAlign: "center",
                  color: "#fff",
                  fontFamily: "Montserrat_600SemiBold",
                }}
              >
                Цааш үргэлжлүүлэх
              </Text>
            </Pressable>
          </View>
          <View style={{ height: 300 }}></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  text: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 24,
    textAlign: "center",
    marginTop: 24,
  },
  text2: {
    marginTop: 12,
    fontFamily: "Montserrat_600SemiBold",
    width: "100%",
    paddingLeft: 12,
    color: "#5CB881",
    fontSize: 14,
  },
  input: {
    fontFamily: "Montserrat_600SemiBold",
    borderWidth: 1,
    borderColor: "#D9D9D9",
    paddingHorizontal: 12,
    marginTop: 12,
    width: "100%",
    height: 40,
    borderRadius: 20,
  },
  button: {
    width: "100%",
    height: 40,
    backgroundColor: "#5CB881",
    borderRadius: 20,
    justifyContent: "center",
    marginTop: 15,
  },
  container: {
    borderColor: "#D9D9D9",
    borderWidth: 1,
    width: "90%",
    borderRadius: 20,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 24,
  },
});
