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
        activateDelete={activatedRows[item.id] || false}
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

  return (
    <SwipeListView
      style={{ height: "100%" }}
      data={filteredDataSource}
      renderItem={renderItem}
      renderHiddenItem={renderHiddenItem}
      leftOpenValue={0}
      rightOpenValue={-60}
      stopLeftSwipe={48}
      friction={6}
      keyExtractor={(item) => item.id}
      onRowOpen={onRowOpen}
      onRowClose={onRowClose}
      disableVirtualization={false}
      swipeToUpdate={true}
      ListFooterComponent={() => <View style={{ height: 120 }} />}
    />
  );
};

export default SwipeListItems;
