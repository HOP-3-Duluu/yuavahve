import React, { useState } from "react";
import { View, Text, Button, Pressable, SafeAreaView, StyleSheet, useWindowDimensions, TextInput } from "react-native";
import Profile from "../assets/Profile";
import MaskInput, { Masks } from 'react-native-mask-input';
import Header from "../components/Header";



const Login = () => {
  const { width, height } = useWindowDimensions()
  const [bday, setBday] = useState('');
  const [text, setText] = useState('');
  const Continue = () => {
    alert(bday + " " + text)
  }
  const styles = StyleSheet.create({
    text: {
      fontWeight: '500',
      fontSize: 24,
      textAlign: 'center'
    },
    text2: {
      fontWeight: '700',
      color: '#5CB881',
      fontSize: width / 20,
      paddingStart: 15
    },
    input: {
      borderWidth: 1,
      borderColor: '#D9D9D9',
      paddingStart: 15,
      marginTop: 15,
      fontWeight: '700',
      width: width / 1.3,
      height: width / 10,
      borderRadius: width / 13,
    },
    button: {
      width: width / 1.3,
      height: width / 10,
      backgroundColor: '#5CB881',
      borderRadius: width / 13,
      justifyContent: 'center',
      marginTop: 15,
    },
    container: {
      borderColor: '#D9D9D9',
      borderWidth: 1,
      width: width * 0.9,
      height: height / 2,
      borderRadius: width / 12,
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignItems: 'center'
    }
  });
  return (
    <SafeAreaView style={{ width: width, height: height, alignItems: 'center', gap: 30 }}>
      <Text style={styles.text}>Сайн уу?</Text>
      <View style={styles.container}>
        <Profile width={width / 3} />
        <View>
          <Text style={styles.text2}>Нэр</Text>
          <TextInput
            style={styles.input}
            placeholder="Нэр"
            onChangeText={newText => setText(newText)} />
        </View>
        <View>
          <Text style={styles.text2}>Төрсөн өдөр</Text>
          <MaskInput
            style={styles.input}
            placeholder="Он/сар/өдөр"
            value={bday}
            onChangeText={(masked, unmasked) => {
              setBday(masked);
            }}
            mask={Masks.DATE_YYYYMMDD}
          />
        </View>

        <Pressable
          onPress={Continue}
          style={styles.button}>
          <Text style={{ textAlign: 'center', color: 'white', fontWeight: '700' }}>Цааш үргэлжлүүлэх</Text>
        </Pressable>
      </View>

    </SafeAreaView>
  );
}

export default Login;
