import React, { Component } from 'react'
import {View, Text, TextInput, TouchableOpacity} from 'react-native'

class NewDeckForm extends Component {
    saveDeck = () => {
        //save deck to AsyncStorage
        //update store
        this.props.navigation.navigate('Decks')
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