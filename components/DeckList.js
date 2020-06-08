import React, { Component } from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import DeckCard from './DeckCard'

class DeckList extends Component {
    render() {
        return(
            <View>
                <Text>DeckList</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('DeckView')}>
                    <DeckCard/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('NewDeck')}>
                    <Text>New Deck</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default DeckList