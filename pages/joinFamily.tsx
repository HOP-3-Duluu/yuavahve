import React, { useEffect, useState } from "react";
import { View, Text, Button, Pressable, SafeAreaView, StyleSheet, useWindowDimensions, TextInput } from "react-native";
import CustomSwitch from "../components/customSwitch";
import { BarCodeScanner } from 'expo-barcode-scanner';


const JoinFamily = () => {
    const { width, height } = useWindowDimensions()
    const [hasPermission, setHasPermission] = useState<any | null>(null);
    const [scanned, setScanned] = useState(false);



    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        };

        getBarCodeScannerPermissions();
    }, []);

    const handleBarCodeScanned = ({ type, data }: any) => {
        setScanned(true);
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>
    }
    const onSelectSwitch = () => {

    };


    const styles = StyleSheet.create({
        container: {
            width: width,
            flexDirection: 'row',
            backgroundColor: '#ffffff',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            marginTop: 15,
        },
        text: {
            fontWeight: '500',
            fontSize: 24,
            textAlign: 'center'
        },
        qrActive: {
            height: width * 0.87,
            width: width * 0.87,
            borderRadius: width * 0.08,
        },
        qrNotActive: {
            height: width * 0.87,
            width: width * 0.87,
            borderRadius: width * 0.08,
            marginStart: -1000
        }
    });
    return (
        <SafeAreaView style={{ width: width, height: height, alignItems: 'center', gap: 30 }}>
            <Text style={styles.text}>Сайн уу? Тэргэл</Text>
            <CustomSwitch
                selectionMode={1}
                roundCorner={true}
                option1={'QR'}
                option2={'Код'}
                onSelectSwitch={onSelectSwitch}
                selectionColor={'white'}
            />
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={styles.qrActive}
            />
            {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
        </SafeAreaView>
    );
}

export default JoinFamily;
