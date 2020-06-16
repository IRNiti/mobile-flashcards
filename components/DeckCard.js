import React from 'react'
import {View, Text } from 'react-native'
import { defaultStyles } from './ContainerStyling'

export default function DeckCard(props) {
    return(
        <View>
            <Text style={defaultStyles.headerTxt}>{props.title}</Text>
            <Text style={defaultStyles.descriptionTxt}>{props.numCards} {props.numCards === 1 ? 'card' : 'cards'}</Text>
        </View>
    )
}