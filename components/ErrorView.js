import React from 'react'
import {View, Text} from 'react-native'

export default function ErrorView(props) {
    return(
        <View>
            <Text>Sorry you cannot take a quiz because there are no cards in the deck.</Text>
        </View>
    )
}