import React, { Component } from 'react'
import {View, Text, TextInput, TouchableOpacity} from 'react-native'
import { connect } from 'react-redux'

class QuestionView extends Component {
    state = {
        answer : ''
    }

    handleChange = (event) => {
        const input = event.nativeEvent.text
        this.setState(() => ({
            answer: input
        }))
    }

    handleSubmit = () => {
        const {navigation} = this.props
        const questionNum = navigation.getParam('questionIndex', 'noIndex')
        const totalQuestions = navigation.getParam('totalQuestions', '0')
        const correctQuestions = navigation.getParam('correctQuestions', '0')

        navigation.navigate('QuizAnswer', {
            deckTitle: this.props.deckTitle,
            submittedAnswer: this.state.answer,
            questionIndex: questionNum,
            totalQuestions: totalQuestions,
            correctQuestions: correctQuestions
        })

        this.setState(() => ({
            answer: ''
        }))
    }

    render() {
        const {navigation} = this.props
        const questionNum = navigation.getParam('questionIndex', 'noIndex')
        const totalQuestions = navigation.getParam('totalQuestions', '0')

        return(
            <View>
                <Text>{questionNum}/{totalQuestions}</Text>
                <Text>{this.props.question}</Text>
                <TextInput
                    placeholder="Your answer"
                    value={this.state.answer}
                    onChange={this.handleChange}
                />
                <TouchableOpacity
                    onPress={() => this.handleSubmit()}>
                    <Text>Show Answer</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

function mapStateToProps(state, { navigation }){
    const {deckTitle, questionIndex} = navigation.state.params

    return {
        deckTitle,
        question: state[deckTitle].questions[questionIndex - 1].question
    }
}

export default connect(mapStateToProps)(QuestionView)