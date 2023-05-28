import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Profile from "../assets/Profile";
import Bottombar from "../components/Footer";

const GroupScreen = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#fff",
        width: "100%",
        height: "100%",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: 128,
          height: 128,
          borderColor: "#D9D9D9",
          borderWidth: 1,
          borderRadius: 64,
          marginTop: 24,
        }}
      >
        <Profile />
      </View>
      <Text
        style={{
          fontSize: 24,
          fontFamily: "Montserrat_600SemiBold",
          margin: 24,
        }}
      >
        Ивээл
      </Text>
      <ScrollView
        style={{
          width: "100%",
          height: "100%",
          borderWidth: 1,
          borderRadius: 20,
          borderColor: "#D9D9D9",
        }}
      >
        <Text
          style={{
            fontSize: 24,
            fontFamily: "Montserrat_600SemiBold",
            padding: 24,
            paddingBottom: 0,
          }}
        >
          Гэр бүлийн гишүүд
        </Text>
        <View>
          <View style={styles.itemProfile}>
            <Profile />
          </View>
          <View style={styles.itemComponent}>
            <Text
              style={{
                fontSize: 18,
                fontFamily: "Montserrat_600SemiBold",
                left: "30%",
              }}
            >
              Тэргэл
            </Text>
          </View>
        </View>
        <View>
          <View style={styles.itemProfile}>
            <Profile />
          </View>
          <View style={styles.itemComponent}>
            <Text
              style={{
                fontSize: 18,
                fontFamily: "Montserrat_600SemiBold",
                left: "30%",
              }}
            >
              Түвшинтөгс
            </Text>
          </View>
        </View>
        <View>
          <View style={styles.itemProfile}>
            <Profile />
          </View>
          <View style={styles.itemComponent}>
            <Text
              style={{
                fontSize: 18,
                fontFamily: "Montserrat_600SemiBold",
                left: "30%",
              }}
            >
              Билэгтгүн
            </Text>
          </View>
        </View>
        <View style={{ height: 120 }}></View>
      </ScrollView>
      <Bottombar />
    </SafeAreaView>
  );
};

export default GroupScreen;

const styles = StyleSheet.create({
  itemComponent: {
    width: "80%",
    height: 48,
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderLeftWidth: 0,
    borderTopRightRadius: 18,
    borderBottomRightRadius: 24,
    justifyContent: "center",
  },
  itemProfile: {
    width: 64,
    height: 64,
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderRadius: 32,
    bottom: -32,
    left: "5%",
    backgroundColor: "#fff",
    zIndex: 1,
  },
});
