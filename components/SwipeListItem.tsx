import React, { useState, useCallback } from "react";
import { View } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import ItemComponent from "./itemComponent";
import TrashIcon from "../assets/Trash";
import { debounce } from "lodash";

const SwipeListItems = ({
  filteredDataSource,
}: {
  filteredDataSource: any;
}) => {
  const [openedRowKey, setOpenedRowKey] = useState(null);
  const [activatedRows, setActivatedRows] = useState<Record<string, boolean>>(
    {}
  );
  const [newDataArray, setNewDataArray] = useState(filteredDataSource);

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
          debouncedUpdateItemInDatabase(updatedItem);
          setNewDataArray([...filteredDataSource]);
        }
      }
    },
    [filteredDataSource, debouncedUpdateItemInDatabase]
  );

  const updateItemInDatabase = (updatedItem: any) => {
    console.log(updatedItem);
  };

  const debouncedUpdateItemInDatabase = debounce(updateItemInDatabase, 100);

  return (
    <SwipeListView
      style={{ height: "100%" }}
      data={newDataArray}
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
      ListFooterComponent={() => <View style={{ height: 160 }} />}
    />
  );
};

export default SwipeListItems;
