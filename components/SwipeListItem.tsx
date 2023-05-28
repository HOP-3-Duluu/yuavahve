import React, { useState, useCallback } from "react";
import { View, Modal, Text, TextInput, Pressable } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import ItemComponent from "./itemComponent";
import TrashIcon from "../assets/Trash";
import { debounce } from "lodash";
import Tugrik from "../assets/Tugrik";
import EmptyList from "./EmptyList";

const SwipeListItems = ({
  filteredDataSource,
}: {
  filteredDataSource: any;
}) => {
  const [openedRowKey, setOpenedRowKey] = useState(null);
  const [priceModal, setPriceModal] = useState(false);
  const [priceInput, setPriceInput] = useState("0");
  const [activatedRows, setActivatedRows] = useState<Record<string, boolean>>(
    {}
  );
  const [preparedData, setPreparedData] = useState({});

  const debouncedUpdateActivatedDelete = debounce(
    (rowKey: string, isOpen: boolean) => {
      setActivatedRows((prevActivatedRows) => ({
        ...prevActivatedRows,
        [rowKey]: isOpen,
      }));
    },
    100
  );

  const renderItem = useCallback(
    ({ item }: { item: any }, rowMap: any) => (
      <ItemComponent
        name={item.productName}
        amount={item.amount}
        isBought={item.isBought}
        createdAt={item.createdAt}
        category={item.category}
        activateDelete={activatedRows[item.productId] || false}
      />
    ),
    [activatedRows]
  );

  const onRowOpen = useCallback(
    (rowKey: string, rowMap: any) => {
      const updatedRows = { ...activatedRows, [rowKey]: true };
      setActivatedRows(updatedRows);
      if (openedRowKey && openedRowKey !== rowKey) {
        const prevOpenedRowKey = openedRowKey;
        setOpenedRowKey(null);
        setActivatedRows((prevActivatedRows) => ({
          ...prevActivatedRows,
          [prevOpenedRowKey]: false,
        }));
      }

      setOpenedRowKey(rowKey);
      debouncedUpdateActivatedDelete(rowKey, true);
    },
    [activatedRows]
  );

  const onRowClose = useCallback(
    (rowKey: string, rowMap: any) => {
      const updatedRows = { ...activatedRows, [rowKey]: false };
      setActivatedRows(updatedRows);
      debouncedUpdateActivatedDelete(rowKey, false);
    },
    [activatedRows]
  );

  const renderHiddenItem = useCallback(
    () => (
      <View
        style={{
          width: "80%",
          height: "100%",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        <View
          style={{
            height: 74,
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
            paddingRight: 12,
          }}
        >
          <TrashIcon />
        </View>
      </View>
    ),
    []
  );

  const onSwipeValueChange = useCallback(
    (swipeData: any) => {
      const { key, value, direction } = swipeData;
      if (value === 48) {
        const updatedItem = filteredDataSource.find(
          (item: any) => item.productId === key
        );
        if (updatedItem && !updatedItem.isBought) {
          updatedItem.isBought = !updatedItem.isBought;
          setPreparedData(updatedItem);
          setPriceModal(true);
        }
      }
    },
    [filteredDataSource]
  );

  const updateItemInDatabase = () => {
    console.log(preparedData.productId);
    console.log(preparedData.familyId);
    console.log("isBought: " + true);
    console.log(priceInput);
    setPriceModal(false);
  };

  return (
    <View style={{ height: "100%" }}>
      <SwipeListView
        style={{ height: "100%" }}
        data={filteredDataSource}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        leftOpenValue={0}
        rightOpenValue={-60}
        stopLeftSwipe={48}
        friction={6}
        keyExtractor={(item) => item.productId}
        onRowOpen={onRowOpen}
        onRowClose={onRowClose}
        disableVirtualization={false}
        onSwipeValueChange={onSwipeValueChange}
        ListFooterComponent={() => <View style={{ height: 180 }} />}
        ListEmptyComponent={<EmptyList />}
      />
      <Modal animationType={"fade"} transparent={true} visible={priceModal}>
        <View
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "90%",
              backgroundColor: "#fff",
              borderRadius: 20,
              padding: 24,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Montserrat_600SemiBold",
                textAlign: "center",
              }}
            >
              Авсан барааны (ширхэгийн, килограммын) үнийн дүнг бичнэ үү
            </Text>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                marginTop: 24,
                alignItems: "center",
              }}
            >
              <TextInput
                style={{
                  width: "100%",
                  height: 40,
                  borderWidth: 1,
                  borderColor: "#D9D9D9",
                  borderRadius: 20,
                  textAlign: "center",
                  fontFamily: "Montserrat_500Medium",
                }}
                onChangeText={(text) => setPriceInput(text)}
                value={priceInput}
                keyboardType="numeric"
              />
              <View
                style={{
                  left: -48,
                }}
              >
                <Tugrik />
              </View>
            </View>
            <Pressable
              style={{
                width: "100%",
                height: 40,
                backgroundColor: "#5CB881",
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 24,
              }}
              onPress={updateItemInDatabase}
            >
              <Text
                style={{
                  fontFamily: "Montserrat_500Medium",
                  fontSize: 16,
                  lineHeight: 20,
                  color: "#fff",
                }}
              >
                Нэмэх
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default SwipeListItems;
