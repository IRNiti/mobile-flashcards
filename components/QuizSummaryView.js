import React, { Component } from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

class QuestionSummaryView extends Component {
    render() {
        return(
            <View>
                <Text>50%</Text>
                <Text>Correct Answers</Text>
                <TouchableOpacity>
                    <Text>Restart Quiz</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Back to Deck</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default QuestionSummaryView