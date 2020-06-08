import React, { Component } from 'react'
import {View, Text, TextInput, TouchableOpacity} from 'react-native'

class QuestionView extends Component {
    render() {
        return(
            <View>
                <Text>1/5</Text>
                <Text>Question</Text>
                <TextInput placeholder="Your answer"/>
                <TouchableOpacity>
                    <Text>Show Answer</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default QuestionView