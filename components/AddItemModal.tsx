import { Text, View, StyleSheet, Pressable, Modal, TextInput } from "react-native";
import { useState } from "react";
export const AddItemModal = () => {

    const [showModal, setShowModal] = useState(false)
    const [amount, onChangeAmount] = useState(1)

    return (
        <View>

            <Modal
                animationType={'fade'}
                transparent={true}
                visible={showModal}
                onRequestClose={() => {
                    console.log('Modal has been closed.');
                }}>

                <View style={styles.modalCont}>
                    <View style={styles.modal}>

                        <View style={styles.modalContent}>
                            <View style={styles.productName}>
                                <Text style={styles.nerText}>Нэр</Text>
                                <TextInput
                                    style={styles.nameInput}
                                    // onChangeText={onChangeNumber}
                                    // value={number}
                                    placeholder="Барааны нэр"
                                    keyboardType="text"
                                />
                            </View>

                            <View style={styles.additionalInfo}>
                                <Text style={styles.nerText}>Нэмэлт мэдээлэл</Text>
                                <TextInput
                                    style={styles.nemeltInput}
                                    multiline={true}
                                    // onChangeText={onChangeNumber}
                                    // value={number}
                                    keyboardType="text"
                                />
                            </View>

                            <View style={styles.amount}>
                                <TextInput
                                    style={styles.shirhegInput}
                                    onChangeText={onChangeAmount}
                                    value={amount}
                                    keyboardType="numeric"
                                />
                                <Text>ш</Text>
                            </View>

                            <View style={styles.buttons}>
                                <Pressable style={styles.cancelBtn} onPress={() => setShowModal(!showModal)}>
                                    <Text style={styles.cancelName}>Цуцлах</Text>
                                </Pressable>

                                <Pressable style={styles.confirmBtn} onPress={() => setShowModal(!showModal)}>
                                    <Text style={styles.confirmName}>Цуцлах</Text>
                                </Pressable>
                            </View>
                        </View>

                    </View>
                </View>
            </Modal>

            <Pressable
                onPress={() => {
                    setShowModal(!showModal);
                }}><Text>Click To Open Modal</Text>

            </Pressable>

        </View>
    );
};


const styles = StyleSheet.create({
    modalCont: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    modal: {
        width: 320,
        height: 400,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#D9D9D9',
        borderWidth: 1,
        borderRadius: 30,
    },
    modalContent: {
        width: '92%',
        height: '92%',
        flexDirection: "column",
        justifyContent: 'space-between'
    },
    productName: {
        width: '100%',
        height: '20%',
        justifyContent: 'space-around'
    },
    nerText: {
        fontFamily: 'Montserrat_600SemiBold',
        fontSize: 16,
        lineHeight: 20,
        color: '#5CB881',
        marginLeft: 8
    },
    nameInput: {
        width: '100%',
        height: '60%',
        background: '#FFFFFF',
        borderColor: '#D9D9D9',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
    },
    additionalInfo: {
        width: '100%',
        height: '40%',
        justifyContent: 'space-around'
    },
    nemeltInput: {
        width: '100%',
        height: '80%',
        textAlignVertical: 'top',
        background: '#FFFFFF',
        borderColor: '#D9D9D9',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
    },
    amount: {
        width: '100%',
        height: '15%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    shirhegInput: {
        width: '48%',
        height: '100%',
        background: '#FFFFFF',
        borderColor: '#D9D9D9',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        textAlign: 'center',
    },
    buttons: {
        width: '100%',
        height: '15%',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    cancelBtn: {
        width: '48%',
        height: '100%',
        borderColor: '#EE6969',
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    confirmBtn: {
        width: '48%',
        height: '100%',
        borderColor: '#5CB881',
        backgroundColor: '#5CB881',
        borderWidth: 1,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cancelName: {
        fontFamily: 'Montserrat_500Medium',
        fontSize: 16,
        lineHeight: 20,
        color: '#EE6969',
    },
    confirmName: {
        fontFamily: 'Montserrat_500Medium',
        fontSize: 16,
        lineHeight: 20,
        color: '#ffffff',
    },
});

export default AddItemModal;
