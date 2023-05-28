import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  Modal,
  TextInput,
  Platform,
} from "react-native";
import IconCategory from "./IconCategory";
import { Picker } from "@react-native-picker/picker";
import UpDownArrow from "../assets/UpDownArrow";

export const AddItemModal = ({
  addItemModalToggle,
  setAddItemModalToggle,
}: {
  addItemModalToggle: boolean;
  setAddItemModalToggle: any;
}) => {
  const [productNameInput, setProductNameInput] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const [amountInput, setAmountInput] = useState("1");
  const [amountTypeInput, setAmountTypeInput] = useState("ш");
  const [categoryInput, setCategoryInput] = useState("meatProducts");

  const addItemToDatabase = () => {
    console.log(productNameInput);
    console.log(messageInput);
    console.log(Number(amountInput));
    console.log(categoryInput);
    setAddItemModalToggle(!addItemModalToggle);
  };

  return (
    <Modal
      animationType={"fade"}
      transparent={true}
      onRequestClose={() => {
        console.log("Modal has been closed.");
      }}
    >
      <View style={styles.modalCont}>
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <View style={styles.iconsContainer}>
              <Text style={styles.nerText}>Төрөл</Text>
              <IconCategory
                category={"choose"}
                categoryInput={categoryInput}
                setCategoryInput={setCategoryInput}
              />
            </View>
            <View style={styles.productName}>
              <Text style={styles.nerText}>Нэр</Text>
              <TextInput
                style={styles.nameInput}
                onChangeText={(text) => setProductNameInput(text)}
                value={productNameInput}
                placeholder="Барааны нэр"
              />
            </View>

            <View style={styles.additionalInfo}>
              <Text style={styles.nerText}>Нэмэлт мэдээлэл</Text>
              <TextInput
                style={styles.nemeltInput}
                multiline={true}
                onChangeText={(text) => setMessageInput(text)}
                value={messageInput}
              />
            </View>
            <View style={{ gap: 12 }}>
              <Text style={styles.nerText}>Тоо (ширхэг, кг, литр, ...)</Text>
              <View style={styles.amount}>
                <TextInput
                  style={styles.shirhegInput}
                  onChangeText={(text) => setAmountInput(text)}
                  value={amountInput}
                  keyboardType="numeric"
                />
                <View style={styles.amountTypeInputContainer}>
                  <Picker
                    style={styles.amountTypeInput}
                    selectedValue={amountTypeInput}
                    onValueChange={(itemValue, itemIndex) =>
                      setAmountTypeInput(itemValue)
                    }
                  >
                    <Picker.Item label="ш" value="ш" />
                    <Picker.Item label="кг" value="кг" />
                    <Picker.Item label="л" value="л" />
                  </Picker>
                  {Platform.OS === "ios" && <UpDownArrow />}
                </View>
              </View>
            </View>

            <View style={styles.buttons}>
              <Pressable
                style={styles.cancelBtn}
                onPress={() => setAddItemModalToggle(!addItemModalToggle)}
              >
                <Text style={styles.cancelName}>Цуцлах</Text>
              </Pressable>

              <Pressable style={styles.confirmBtn} onPress={addItemToDatabase}>
                <Text style={styles.confirmName}>Нэмэх</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalCont: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  modal: {
    width: "90%",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#D9D9D9",
    borderWidth: 1,
    borderRadius: 30,
    padding: 24,
  },
  iconsContainer: {
    width: "100%",
    gap: 12,
    overflow: "hidden",
  },
  modalContent: {
    width: "100%",
    flexDirection: "column",
    gap: 24,
  },
  productName: {
    width: "100%",
    gap: 12,
  },
  nerText: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 16,
    lineHeight: 20,
    color: "#5CB881",
    marginLeft: 8,
  },
  nameInput: {
    width: "100%",
    height: 40,
    borderColor: "#D9D9D9",
    borderWidth: 1,
    borderRadius: 20,
    padding: 12,
  },
  additionalInfo: {
    width: "100%",
    gap: 12,
  },
  nemeltInput: {
    width: "100%",
    height: 120,
    borderColor: "#D9D9D9",
    borderWidth: 1,
    borderRadius: 20,
    padding: 12,
  },
  amount: {
    width: "100%",
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  amountTypeInputContainer: {
    width: "48%",
    height: "100%",
    borderColor: "#D9D9D9",
    borderWidth: 1,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    flexDirection: "row",
    gap: 8,
  },
  amountTypeInput: {
    width: "60%",
  },
  shirheg: {
    fontFamily: "Montserrat_800ExtraBold",
    color: "#5BC881",
  },
  shirhegInput: {
    width: "48%",
    height: "100%",
    borderColor: "#D9D9D9",
    borderWidth: 1,
    borderRadius: 20,
    textAlign: "center",
    color: "#000",
  },
  buttons: {
    width: "100%",
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cancelBtn: {
    width: "47%",
    height: "100%",
    borderColor: "#EE6969",
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  confirmBtn: {
    width: "47%",
    height: "100%",
    borderColor: "#5CB881",
    backgroundColor: "#5CB881",
    borderWidth: 1,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  cancelName: {
    fontFamily: "Montserrat_500Medium",
    fontSize: 16,
    lineHeight: 20,
    color: "#EE6969",
  },
  confirmName: {
    fontFamily: "Montserrat_500Medium",
    fontSize: 16,
    lineHeight: 20,
    color: "#ffffff",
  },
});

export default AddItemModal;
