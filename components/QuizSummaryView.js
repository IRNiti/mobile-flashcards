import React, { Component } from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {clearLocalNotifications, setLocalNotification} from '../utils/helpers'

class QuestionSummaryView extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: 'Quiz'
        }
    }

    restartQuiz = () => {
        const {navigation} = this.props
        const totalQuestions = navigation.getParam('totalQuestions', '0')

        clearLocalNotifications().then(setLocalNotification)

        this.props.navigation.navigate('Quiz', {
            questionIndex: 1,
            totalQuestions: totalQuestions,
            correctQuestions: 0
        })
    }

    navigateToDeck = () => {
        clearLocalNotifications().then(setLocalNotification)

        //TODO: this should navigate to a specific deck
        this.props.navigation.navigate('DeckView')
    }

    render() {
        const {navigation} = this.props
        const totalQuestions = navigation.getParam('totalQuestions', '0')
        const correctQuestions = navigation.getParam('correctQuestions', '0')

        return(
            <View>
                <Text>{correctQuestions/totalQuestions*100}%</Text>
                <Text>Correct Answers</Text>
                <TouchableOpacity onPress={this.restartQuiz}
                >
                    <Text>Restart Quiz</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.navigateToDeck}>
                    <Text>Back to Deck</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default QuestionSummaryView