import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { defaultStyles } from './ContainerStyling'

export default function ErrorView() {
    return(
        <View style={defaultStyles.center}>
            <Entypo name="emoji-sad" size={30} color="black" />
            <Text style={styles.errorText}>
                Sorry you cannot take a quiz because there are no cards in the deck.
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    errorText: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 10
    }
})