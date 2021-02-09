import React, { useState } from 'react'
import { Text, StyleSheet, View, TextInput, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'
import Card from '../components/Card'
import Input from '../components/Input';
import colors from '../constants/colors';

export default function StartGameScreen() {
    const [value, setValue] = useState('');
    const [confirm, setConfirm] = useState(false);
    const [number, setNumber] = useState(0);

    const numInputHandler = (input) => {
        setValue(input.replace(/[^0-9]/g, ''));
    }
    const resetInputHandler = () => {
        setValue('');
        setConfirm(false);
    }
    const confirmInputHandler = () => {
        const chosenNum = parseInt(value);
        if (isNaN(chosenNum) || chosenNum <= 0 || chosenNum > 99) {
            Alert.alert('Invalid Number!', 'Number must be between 1 and 99.', [{text: 'Okay', style: 'destructive', onPress: resetInputHandler }])
            return;
        }

        setConfirm(true);
        setValue('');
        setNumber(chosenNum);
    }

    let confirmedOutput = null;
    if (confirm) {
        confirmedOutput = <Text>Chosen Number: {number} </Text>
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start a new game!</Text>
                <Card style={StyleSheet.flatten(styles.inputContainer)}>
                    <Text>Select a Number</Text>
                    <Input 
                        style={styles.input} 
                        autoCorrect={false} 
                        keyboardType='numeric' 
                        maxLength={2} 
                        onChangeText={text => numInputHandler(text) }
                        value={value}    
                    />
                    <View style={styles.buttonContainer}>
                        <Button title='Reset' onPress={resetInputHandler} color={colors.secondary} />
                        <Button title='Confirm' onPress={confirmInputHandler} color={colors.primary} />
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        width: '100%'
    },
    title: {
        fontSize: 20,
        marginVertical: 10
    },
    inputContainer: {
        width: '100%',
        alignItems: 'center'
    },
    input: {
        width: '20%',
        textAlign: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    }
})
