import React, { useState } from "react";
import { Pressable, StyleSheet, View, useWindowDimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Curve from "../assets/Curve";
import Tugrik from "../assets/Tugrik";
import Group from "../assets/Group";
import Plus from "../assets/Plus";
import AddItemModal from "./AddItemModal";

const BarButton = ({
  w,
  h,
  l,
  type,
}: {
  w: number;
  h: number;
  l: number;
  type: string;
}) => {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={
        type === "zardal"
          ? () => navigation.navigate("Expense")
          : () => navigation.navigate("Group")
      }
      style={{
        position: "absolute",
        left: l,
        width: w,
        height: h,
        borderTopWidth: 1,
        borderColor: "#5CB881",
      }}
    >
      <View
        style={
          type === "zardal"
            ? { flex: 1, justifyContent: "center", marginLeft: width / 5.5 }
            : { flex: 1, justifyContent: "center", marginLeft: width / 12 }
        }
      >
        {type === "zardal" ? <Tugrik /> : <Group />}
      </View>
    </Pressable>
  );
};

const PlusMid = ({
  w,
  h,
  b,
  l,
  setAddItemModalToggle,
}: {
  w: number;
  h: number;
  b: number;
  l: number;
  setAddItemModalToggle: any;
}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => {
        setAddItemModalToggle(true);
        navigation.navigate("Home");
      }}
      style={{
        position: "absolute",
        bottom: b,
        left: l,
        width: w,
        height: h,
        borderRadius: w / 2,
        backgroundColor: "#5CB881",
      }}
    >
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Plus />
      </View>
    </Pressable>
  );
};

const Bottombar = () => {
  const { width, height } = useWindowDimensions();
  const [addItemModalToggle, setAddItemModalToggle] = useState(false);
  return (
    <View
      style={{
        position: "absolute",
        bottom: 0,
        backgroundColor: "white",
        width: width,
        height: height / 11,
      }}
    >
      <PlusMid
        h={width / 6.15}
        w={width / 6.15}
        b={height / 19}
        l={width / 2 - width / 11.6}
        setAddItemModalToggle={setAddItemModalToggle}
      />
      <BarButton
        w={width / 2.96}
        h={height / 10.1}
        l={0}
        type={"zardal"}
      ></BarButton>
      <View
        style={{
          position: "absolute",
          bottom: height / 11 - width / 9 + 1,
          left: width / 3,
        }}
      >
        <Curve width={width / 3} />
      </View>
      <BarButton
        w={width / 2.96}
        h={height / 11}
        l={(width / 3.02) * 2}
        type={"group"}
      ></BarButton>
      {addItemModalToggle && (
        <AddItemModal
          addItemModalToggle={addItemModalToggle}
          setAddItemModalToggle={setAddItemModalToggle}
        />
      )}
    </View>
  );
};

export default Bottombar;
