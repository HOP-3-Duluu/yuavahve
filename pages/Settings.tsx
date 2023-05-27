import {
  SafeAreaView,
  ScrollView,
  Image,
  Text,
  View,
  StyleSheet,
  Pressable,
} from "react-native";
import CopyIcon from "../assets/CopyIcon";
import EditIcon from "../assets/EditIcon";
import * as Clipboard from "expo-clipboard";
import Bottombar from "../components/Footer";

export const Settings = () => {
  let stringVal = "7396dc35-52fa-44d0-8c22-1327dcd76b56";
  let shortenString = stringVal.substring(0, 23).concat("...");

  const copyToClipboard = async () => {
    console.log("done???");
    await Clipboard.setStringAsync(stringVal);
  };

  return (
    <SafeAreaView style={styles.body}>
      <ScrollView style={{ width: "100%" }}>
        <View style={styles.familyNameCont}>
          <View style={styles.familyName}>
            <Text style={styles.familyNameText}>Тэрний гэр бүл</Text>
            <Pressable style={styles.editIcon}>{EditIcon}</Pressable>
          </View>
        </View>

<<<<<<< HEAD
      <View style={styles.instructionCont}>
        <Text style={styles.instruction}>Гэр бүлийн гишүүн нэмэх</Text>
      </View>

      <View style={styles.container}>
        <Image
          style={styles.img}
          source={{
            uri: "https://api.qr-code-generator.com/v1/create?access-token=9yrQ72A3bcHUz3EUdsi6RJswZyBxlc_LSYqNBPFGY2MQHOIJZv6yXOZOc1YqWdVR&qr_code_text=a&image_format=PNG",
          }}
        />
        <View style={styles.codeCont}>
          <Text style={styles.codeTitle}>Код:</Text>
          <Text numberOfLines={1} style={styles.familyId}>
            {shortenString}
          </Text>
          <Pressable onPress={() => copyToClipboard()} style={styles.copyIcon}>
            {CopyIcon}
          </Pressable>
=======
        <View style={styles.instructionCont}>
          <Text style={styles.instruction}>Гэр бүлийн гишүүн нэмэх</Text>
>>>>>>> 60ee6a25783c4e19caf4efcf1d09daa7f3112995
        </View>

        <View style={styles.container}>
          <View style={styles.borderedContainer}>
            <Image
              style={styles.img}
              source={{
                uri: `http://api.qrserver.com/v1/create-qr-code/?data=${stringVal}!&size=300x300`,
              }}
            />
            <View style={styles.codeCont}>
              <Text style={styles.codeTitle}>Код:</Text>
              <Text numberOfLines={1} style={styles.familyId}>
                {shortenString}
              </Text>
              <Pressable
                onPress={() => copyToClipboard()}
                style={styles.copyIcon}
              >
                {CopyIcon}
              </Pressable>
            </View>
          </View>

          <Pressable style={styles.familyDelete}>
            <Text style={styles.deleteText}>Бүлэглэлийг устгах</Text>
          </Pressable>
        </View>
        <View style={{ height: 200 }}></View>
      </ScrollView>
      <Bottombar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  container: {
    width: "100%",
    alignItems: "center",
  },
  borderedContainer: {
    width: "90%",
    borderColor: "#D9D9D9",
    borderWidth: 1,
    borderRadius: 30,
    alignItems: "center",
  },
  familyNameCont: {
    width: "100%",
    height: 120,
    justifyContent: "center",
    alignItems: "center",
  },
  familyName: {
    width: "60%",
    height: 29,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  familyNameText: {
    fontFamily: "Montserrat_600SemiBold",
    width: "90%",
    height: "100%",
    fontWeight: 600,
    fontSize: 24,
    lineHeight: 29,
    alignItems: "center",
    color: "#000000",
  },
  instructionCont: {
    height: 40,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  instruction: {
    fontFamily: "Montserrat_500Medium",
    fontSize: 20,
    lineHeight: 24,
    color: "#000000",
  },
  img: {
    margin: 24,
    width: 300,
    height: 300,
  },
  codeTitle: {
    fontFamily: "Montserrat_500Medium",
    fontSize: 14,
    lineHeight: 17,
    color: "#000000",
  },
  codeCont: {
    width: "80%",
    height: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
  },
  familyId: {
    width: "65%",
    fontSize: 12,
    lineHeight: 15,
    color: "#5CB881",
    fontFamily: "Montserrat_500Medium",
    marginLeft: 5,
  },
  copyIcon: {
    width: 24,
    height: 24,
  },
  familyDelete: {
    width: 350,
    height: 40,
    marginTop: 24,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EE6969",
    border: "1px solid #EE6969",
    borderRadius: 30,
  },
  deleteText: {
    fontFamily: "Montserrat_500Medium",
    fontSize: 16,
    lineHeight: 20,
    color: "#FFFFFF",
  },
  editIcon: {
    width: 24,
    height: 24,
  },
});

export default Settings;
