import {
  Text,
  View,
  StyleSheet,
  Pressable,
  Modal,
  TextInput,
} from "react-native";
import Tugrik from "../assets/Tugrik";
import { useState } from "react";

export const PaymentModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [amount, onChangeAmount] = useState(1);

  return (
    <View>
      <Modal
        animationType={"fade"}
        transparent={true}
        visible={showModal}
        onRequestClose={() => {
          console.log("Modal has been closed.");
        }}
      >
        <View style={styles.modalCont}>
          <View style={styles.modal}>
            <View style={styles.modalContent}>
              <View style={styles.questionCont}>
                <Text style={styles.questionText}>
                  Авсан барааны үнийн дүнгээ бичнэ үү
                </Text>
              </View>

              <View style={styles.priceInputCont}>
                {/* <View style={styles.inputWIcon}> */}
                <TextInput
                  style={styles.priceInput}
                  onChangeText={onChangeAmount}
                  value={amount}
                  keyboardType="numeric"
                />

                {/* <Tugrik/> */}
                {/* </View> */}
              </View>

              <View style={styles.confirmBtnCont}>
                <Pressable
                  style={styles.confirmBtn}
                  onPress={() => setShowModal(!showModal)}
                >
                  <Text style={styles.confirmName}>Нэмэх</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </Modal>

      <Pressable
        onPress={() => {
          setShowModal(!showModal);
        }}
      >
        <Text>Click To Open Modal</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  modalCont: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modal: {
    width: 300,
    height: 250,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#D9D9D9",
    borderWidth: 1,
    borderRadius: 30,
  },
  modalContent: {
    width: "80%",
    height: "80%",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  questionCont: {
    width: "100%",
    height: "25%",
  },
  questionText: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 16,
    lineHeight: 20,
    color: "#5CB881",
    textAlign: "center",
  },
  priceInputCont: {
    width: "100%",
    height: "20%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  // inputWIcon: {
  //     width: '90%',
  //     height: '100%',
  //     flexDirection: 'row',
  //     backgroundColor: 'red'
  // },
  priceInput: {
    width: "90%",
    height: "100%",
    background: "#FFFFFF",
    borderColor: "#D9D9D9",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    textAlign: "center",
  },
  confirmBtnCont: {
    width: "100%",
    height: "25%",
    justifyContent: "center",
    alignItems: "center",
  },
  confirmBtn: {
    width: "70%",
    height: "100%",
    borderColor: "#5CB881",
    backgroundColor: "#5CB881",
    borderWidth: 1,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  confirmName: {
    fontFamily: "Montserrat_500Medium",
    fontSize: 16,
    lineHeight: 20,
    color: "#ffffff",
  },
});

export default PaymentModal;
