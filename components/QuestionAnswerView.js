import React, { Component } from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

class QuestionAnswerView extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: 'Quiz'
        }
    }

    recordAnswer = (answer) => {
        const {navigation} = this.props
        const questionNum = navigation.getParam('questionIndex', '0')
        const totalQuestions = navigation.getParam('totalQuestions', '0')
        let correctQuestions = navigation.getParam('correctQuestions', '0')

        if(answer){
            correctQuestions += 1
        }

        if(questionNum === totalQuestions){
            navigation.navigate('QuizSummary', {
                totalQuestions: totalQuestions,
                correctQuestions: correctQuestions
            })
        } else {
            navigation.navigate('Quiz', {
                questionIndex: questionNum+1,
                totalQuestions: totalQuestions,
                correctQuestions: correctQuestions
            })
        }

    }

    render() {
        const {navigation} = this.props
        const questionNum = navigation.getParam('questionIndex', '0')
        const totalQuestions = navigation.getParam('totalQuestions', '0')

        return(
            <View>
                <Text>{questionNum}/{totalQuestions}</Text>
                <Text>Question</Text>
                <Text>Submitted Answer</Text>
                <Text>Correct Answer</Text>
                <TouchableOpacity onPress={() => this.recordAnswer(true)}>
                    <Text>Correct</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.recordAnswer(false)}>
                    <Text>Incorrect</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default QuestionAnswerView