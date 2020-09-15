import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList, Modal, TextInput } from 'react-native';

const ItemInput = props => {

    const [enteredItem, setEnteredItem] = useState('')

    const itemInputHandler = enteredText => {
        setEnteredItem(enteredText)
    }

    const addItemHandler = () => {
        props.onAddItem(enteredItem)
        setEnteredItem('')
    }

    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Item"
                    style={styles.input}
                    onChangeText={itemInputHandler}
                    value={enteredItem}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="CANCEL" color='red' onPress={props.onCancel} />
                    </View>
                    <View style={styles.button}>
                        <Button title="ADD" onPress={addItemHandler} />
                    </View>

                </View>

            </View>

        </Modal>
    )

}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10

    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%'
    },
    button: {
        width: '40%'
    }
});

export default ItemInput

