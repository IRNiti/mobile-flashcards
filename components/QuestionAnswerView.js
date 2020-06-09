import React, { Component } from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import { connect } from 'react-redux'

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
                <Text>{this.props.question}</Text>
                <Text>{this.props.submittedAnswer}</Text>
                <Text>{this.props.correctAnswer}</Text>
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

function mapStateToProps(state, { navigation }){
    const {deckTitle, submittedAnswer, questionIndex} = navigation.state.params
    return {
        deckTitle,
        question: state[deckTitle].questions[questionIndex - 1].question,
        correctAnswer: state[deckTitle].questions[questionIndex - 1].answer,
        submittedAnswer
    }
}

export default connect(mapStateToProps)(QuestionAnswerView)