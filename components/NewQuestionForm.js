import React, { Component } from 'react'
import {View, Text, TextInput, TouchableOpacity} from 'react-native'

class NewQuestionForm extends Component {
    render() {
        return(
            <View>
                <Text>Question</Text>
                <TextInput placeholder="Enter question here"/>
                <Text>Answer</Text>
                <TextInput placeholder="Enter answer here"/>
                <TouchableOpacity>
                    <Text>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default NewQuestionForm