import React, { Component } from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

class QuestionAnswerView extends Component {
    render() {
        return(
            <View>
                <Text>1/5</Text>
                <Text>Question</Text>
                <Text>Submitted Answer</Text>
                <Text>Correct Answer</Text>
                <TouchableOpacity>
                    <Text>Correct</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Incorrect</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default QuestionAnswerView