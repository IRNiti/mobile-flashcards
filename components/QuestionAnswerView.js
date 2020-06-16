import React, { Component } from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import { connect } from 'react-redux'
import { defaultStyles } from './ContainerStyling'

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
                <View style={defaultStyles.card}>
                    <Text>
                        {questionNum}/{totalQuestions}
                    </Text>
                    <Text style={defaultStyles.formHeaderTxt}>
                        Question
                    </Text>
                    <Text style={defaultStyles.formInputTxt}>
                        {this.props.question}
                    </Text>
                    <Text style={defaultStyles.formHeaderTxt}>
                        Your Answer
                    </Text>
                    <Text style={defaultStyles.formInputTxt}>
                        {this.props.submittedAnswer}
                    </Text>
                    <Text style={defaultStyles.formHeaderTxt}>
                        Correct Answer
                    </Text>
                    <Text style={defaultStyles.formInputTxt}>
                        {this.props.correctAnswer}
                    </Text>
                </View>
                <View style={defaultStyles.sideBySideBtnContainer}>
                    <TouchableOpacity
                        onPress={() => this.recordAnswer(true)}
                        style={[defaultStyles.genericBtn,
                            defaultStyles.correctBtn,
                            defaultStyles.btnAlignment]}
                    >
                        <Text style={defaultStyles.submitBtnText}>
                            Correct
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.recordAnswer(false)}
                        style={[defaultStyles.genericBtn,
                            defaultStyles.incorrectBtn,
                            defaultStyles.btnAlignment]}
                    >
                        <Text style={defaultStyles.submitBtnText}>
                            Incorrect
                        </Text>
                    </TouchableOpacity>
                </View>
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