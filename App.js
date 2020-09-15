import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button, FlatList } from 'react-native';

import ItemInput from './components/ItemInput'
import ItemContainer from './components/ItemContainer'

export default function App() {

  const [item, setItem] = useState([])
  const [isAddMode, setIsAddMode] = useState(false)

  const addItemHandler = itemTitle => {
    setItem(currentItem => [
      ...currentItem,
      { key: Math.random().toString(), value: itemTitle }
    ])
    setIsAddMode(false)
  }

  const removeItemHandler = itemKey => {
    setItem(currentItem => {
      return currentItem.filter(item => item.key !== itemKey)
    })
    setIsAddMode(false)
  }


  return (
    <View style={styles.screen}>
      <Button title="Add New Item" onPress={() => setIsAddMode(true)} />
      <ItemInput visible={isAddMode}
        onAddItem={addItemHandler}
        onCancel={removeItemHandler} />
      <FlatList
        data={item}
        renderItem={itemData => (
          <ItemContainer
            valueKey={itemData.item.key}
            onDelete={removeItemHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
});
