import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const URL = "https://a4ajcdctoc.execute-api.ap-southeast-1.amazonaws.com";

export const AuthContext = createContext({
  user: {},
  login: () => {},
  signUp: () => {},
  logOut: () => {},
});

export const Provider = ({ children }: { children: any }) => {
  const [user, setUser] = useState({});

  const getDataFromAsyncStorage = async () => {
    try {
      const value = await AsyncStorage.getItem("user");
      if (value !== null) {
        setUser(value);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getDataFromAsyncStorage();
  }, []);

  const signUp = async (username: string, birthday: string) => {
    const updatedBirthday = new Date(
      birthday.split("/").join("-")
    ).toISOString();
    try {
      const res = await axios.post(
        `${URL}/user/create?username=${username}&birthday=${updatedBirthday}`
      );

      const jsonValue = JSON.stringify({
        userId: res.data.message,
        username,
        birthday: updatedBirthday,
      });
      await AsyncStorage.setItem("user", jsonValue);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AuthContext.Provider value={{ user, signUp }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
