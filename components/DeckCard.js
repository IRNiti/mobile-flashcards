import React, { Component } from 'react'
import {View, Text} from 'react-native'

export default function DeckCard(props) {
    return(
        <View>
            <Text>{props.title}</Text>
            <Text>{props.numCards} {props.numCards === 1 ? 'card' : 'cards'}</Text>
        </View>
    )
}