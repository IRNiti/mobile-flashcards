import React, { Component } from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import DeckCard from './DeckCard'

class DeckList extends Component {
    render() {
        return(
            <View>
                <Text>DeckList</Text>
                <DeckCard/>
                <TouchableOpacity>
                    <Text>New Deck</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default DeckList