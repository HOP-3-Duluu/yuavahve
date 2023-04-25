import { Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import Curve from "../assets/Curve";
import Tugrik from '../assets/Tugrik';
import Group from '../assets/Group';
import Plus from '../assets/Plus';



const BarButton = ({ w, h, l, type }: { w: number, h: number, l: number, type: string }) => {
    const { width } = useWindowDimensions();
    return (
        <Pressable onPress={type==='zardal' ? () => alert("Zardal") : () => alert("Group")} style={{ position: 'absolute', left: l, width: w, height: h, borderTopWidth: 1, borderColor: '#5CB881', }}>
            <View style={type === 'zardal' ? {flex: 1, justifyContent: 'center',marginLeft: width/5.5} : {flex: 1, justifyContent: 'center',marginLeft: width/12}}>
                {type === 'zardal' ? <Tugrik/> : <Group/>}
            </View>
        </Pressable>
    );
}

const PlusMid = ({ w, h, b, l }: { w: number, h: number, b: number, l: number}) => {
    return (
        <Pressable onPress={() => alert("Add item")} style={{ position: 'absolute', bottom: b, left: l,width: w, height: h, borderRadius: w/2, backgroundColor: '#5CB881'}}>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Plus/>
            </View>
        </Pressable>
    );
}

const Bottombar = () => {
    const { width, height } = useWindowDimensions();
    return (
        <View style={{ position: 'absolute', bottom: 0, backgroundColor: 'white', width: width, height: height / 11, }}>
            <PlusMid h={width/6.15} w={width/6.15} b={height/19} l={(width/2 - width/11.6)}/>
            <BarButton w={width / 2.96} h={height / 10.1} l={0} type={'zardal'}></BarButton>
            <View style={{ position: 'absolute', bottom: height / 11 - width / 9 + 1, left: width / 3 }}>
                <Curve width={width / 3} />
            </View>
            <BarButton w={width / 2.96} h={height / 11} l={width / 3.02 * 2} type={'group'}></BarButton>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        backgroundColor: '#fff',
        bottom: 0
    },
});

export default Bottombar