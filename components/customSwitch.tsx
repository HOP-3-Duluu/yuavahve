import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, useWindowDimensions } from 'react-native';

const CustomSwitch = ({
    navigation,
    selectionMode,
    roundCorner,
    option1,
    option2,
    onSelectSwitch,
    selectionColor
}: any) => {
    const { width } = useWindowDimensions();

    const [getSelectionMode, setSelectionMode] = useState(selectionMode);
    const [getRoundCorner, setRoundCorner] = useState(roundCorner);

    const updatedSwitchData = (val: any) => {
        setSelectionMode(val);
        onSelectSwitch(val);
    };

    return (
        <View>
            <View
                style={{
                    height: width / 7.86,
                    width: width * 0.87,
                    backgroundColor: '#F6F6F6',
                    borderRadius: getRoundCorner ? 25 : 0,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    padding: 2,
                }}>
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => updatedSwitchData(1)}
                    style={{
                        flex: 1,

                        backgroundColor: getSelectionMode == 1 ? selectionColor : '#F6F6F6',
                        borderRadius: getRoundCorner ? 25 : 0,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Text
                        style={{
                            color: getSelectionMode == 1 ? '#5DB075' : '#BDBDBD',
                            fontWeight: getSelectionMode == 2 ? '600' : '500',
                        }}>
                        {option1}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => updatedSwitchData(2)}
                    style={{
                        flex: 1,

                        backgroundColor: getSelectionMode == 2 ? selectionColor : '#F6F6F6',
                        borderRadius: getRoundCorner ? 25 : 0,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Text
                        style={{
                            color: getSelectionMode == 2 ? '#5DB075' : '#BDBDBD',
                            fontWeight: getSelectionMode == 2 ? '600' : '500',
                        }}>
                        {option2}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
export default CustomSwitch;