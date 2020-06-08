import React, { Component } from 'react'
import {View, Text, TextInput, TouchableOpacity} from 'react-native'

class NewDeckForm extends Component {
    saveDeck = () => {
        //TODO: save deck to AsyncStorage
        //TODO: update store
        //TODO: update navigation to route to newly created deck view
        this.props.navigation.navigate('DeckView')
    }

    render() {
        return(
            <View>
                <Text>Title</Text>
                <TextInput placeholder="Enter deck title here"/>
                <TouchableOpacity onPress={this.saveDeck}>
                    <Text>Save</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default NewDeckForm