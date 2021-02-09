import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Card(props) {
    console.log(props.style)
    return (
        <View style={{...styles.card, ...props.style}}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black', // shadow props for IOS ONLY
        shadowOffset: {width:0, height:2},
        shadowRadius: 6,
        shadowOpacity: .26,
        elevation: 5,  // elevation for ANDROID ONLY
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 8
    },
})
