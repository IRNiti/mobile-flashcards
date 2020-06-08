import React, { Component } from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

class DeckView extends Component {
    render() {
        return(
            <View>
                <Text>Deck1</Text>
                <Text>5 cards</Text>
                <TouchableOpacity>
                    <Text>Add Card</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Start Quiz</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default DeckView