import React, { Component } from 'react'
import {View, Text, TextInput, TouchableOpacity} from 'react-native'

class NewQuestionForm extends Component {
    saveQuestion = () => {
        //save deck to AsyncStorage
        //update store
        this.props.navigation.navigate('DeckView')
    }

    render() {
        return(
            <View>
                <Text>Question</Text>
                <TextInput placeholder="Enter question here"/>
                <Text>Answer</Text>
                <TextInput placeholder="Enter answer here"/>
                <TouchableOpacity onPress={this.saveQuestion}>
                    <Text>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default NewQuestionForm