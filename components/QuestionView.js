import React, { Component } from 'react'
import {View, Text, TextInput, TouchableOpacity} from 'react-native'

class QuestionView extends Component {
    render() {
        const {navigation} = this.props
        const questionNum = navigation.getParam('questionIndex', 'noIndex')
        const totalQuestions = navigation.getParam('totalQuestions', '0')
        const correctQuestions = navigation.getParam('correctQuestions', '0')

        return(
            <View>
                <Text>{questionNum}/{totalQuestions}</Text>
                <Text>Question</Text>
                <TextInput placeholder="Your answer"/>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('QuizAnswer', {
                            questionIndex: questionNum,
                            totalQuestions: totalQuestions,
                            correctQuestions: correctQuestions
                        })
                    }}>
                    <Text>Show Answer</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default QuestionView