import React, { useState } from "react";
import { View, Text, Button, Pressable, SafeAreaView, StyleSheet, useWindowDimensions, TextInput } from "react-native";
import Family from "../assets/Family";
import Create from "../assets/Create";
import Join from "../assets/Join";
import Header from "../components/Header";



const BigButton = ({ type }: { type: string }) => {
    const { width } = useWindowDimensions();
    const styles = StyleSheet.create({
        Ctext: {
            fontWeight: '600',
            color: '#5CB881',
            fontSize: width / 24,
        },
        Jtext: {
            fontWeight: '600',
            color: '#fff',
            fontSize: width / 24,
        },
        Jbutton: {
            width: width / 3.2,
            height: width / 3.2,
            backgroundColor: '#5CB881',
            borderRadius: width / 13,
            borderColor: '#5CB881',
            borderWidth: width / 200,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 15,
        },
        Cbutton: {
            width: width / 3.2,
            height: width / 3.2,
            backgroundColor: '#ffffff',
            borderRadius: width / 13,
            borderColor: '#5CB881',
            borderWidth: width / 200,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 15,
        },
        container: {
            width: width,
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: 15,
            gap: 10,
        },
        
    });

    return (
        <Pressable onPress={type === 'Uusgeh' ? () => alert("Uusgeh") : () => alert("Negdeh")} style={type === 'Uusgeh' ? styles.Cbutton : styles.Jbutton}>
            <View style={styles.container}>
                {type === 'Uusgeh' ? <Join width={width / 10} /> : <Create width={width / 10} />}
                <Text style={type === 'Uusgeh' ? styles.Ctext : styles.Jtext}>
                    {type === 'Uusgeh' ? 'Үүсгэх' : 'Нэгдэх'}
                </Text>
            </View>
        </Pressable>
    );
}


const CreateFamily = () => {
    const { width, height } = useWindowDimensions()
    
    const styles = StyleSheet.create({
        container: {
            width: width,
            flexDirection: 'row',
            backgroundColor: '#ffffff',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            marginTop: 15,
        },
    });
    return (
        <SafeAreaView style={{ width: width, height: height, alignItems: 'center', justifyContent: 'center',gap: 30 }}>
            <Family width={width * 0.9} />
            <View style={styles.container}>
                <BigButton type={'Uusgeh'} />
                <BigButton type={'Negdeh'} />
            </View>

        </SafeAreaView>
    );
}

export default CreateFamily;
