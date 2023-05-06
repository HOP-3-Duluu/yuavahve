import React, { useState } from "react";
import { View, Text, Button, Pressable, SafeAreaView, StyleSheet, useWindowDimensions, TextInput } from "react-native";
import Profile from "../assets/Profile";
import DatePicker from "react-native-date-picker";
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import RNDateTimePicker from "@react-native-community/datetimepicker";

const Login = () => {
  const { width, height } = useWindowDimensions()
  const [show, setShow] = useState(false)
  const [mode, setMode] = useState('date')
  const [text, setText] = useState('Empty')
  const [date, setDate] = useState(new Date())

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date; 
    setShow(!show); 
    setDate(currentDate);
    let tempDate = new Date(currentDate);
    let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear(); 
    setText(fDate)
  }
    const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
    }
      return (
        <SafeAreaView style={{ width: width, height: height, alignItems: 'center', justifyContent: 'center', gap: 30 }}>
          <Text style={styles.text}>Сайн уу?</Text>
          <View style={{ borderColor: '#D9D9D9', borderWidth: 1, width: width * 0.9, height: height / 2, borderRadius: width / 12, alignItems: 'center' }}>
            <Profile width={width / 3} />
            <Text>Нэр</Text>
            <Text style={styles.text}>Birth Date :</Text>
            {/* <DatePicker
          style={styles.datePickerStyle}
          date={date}
          mode="date"
          confirmText="Confirm"
          cancelText="Cancel"
          onDateChange={(date) => {
            setDate(date);
          }}
        /> */}
            {show && (
              <RNDateTimePicker
                value={date}
                display="calendar"
                style={{ backgroundColor: 'white', borderColor: 'gray', borderWidth: 1, }}
                onChange={onChange}
              />)}
              <Text>{text}</Text>
              <Button onPress={showMode} title="dasdasd"/>
          </View>
          <TextInput placeholder={text} style={{borderWidth: 1, width:100, height:20}}/>
        </SafeAreaView>
      );
    }

    export default Login;

    export const styles = StyleSheet.create({
      text: {
        fontWeight: '500',
        fontSize: 24,
        textAlign: 'center'
      },
      datePickerStyle: {
        width: 230,
      },
    });