import React from 'react'
import { Text, StyleSheet, View, TextInput, Button } from 'react-native'
import Card from '../components/Card'
import colors from '../constants/colors';

export default function StartGameScreen() {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start a new game!</Text>
            <Card style={StyleSheet.flatten(styles.inputContainer)}>
                <Text>Select a Number</Text>
                <TextInput />
                <View style={styles.buttonContainer}>
                    <Button title='Reset' onPress={ () => console.log('hi')} color={colors.secondary} />
                    <Button title='Confirm' onPress={ () => console.log('hi')} color={colors.primary} />
                </View>
            </Card>
        </View>
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
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    }
})
