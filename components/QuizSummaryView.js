import React, { Component } from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import {clearLocalNotifications, setLocalNotification} from '../utils/helpers'
import {defaultStyles} from './ContainerStyling'

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
                <View style={defaultStyles.card}>
                    <Text style={styles.resultTxt}>
                        {correctQuestions/totalQuestions*100}%
                    </Text>
                    <Text style={styles.resultTxt}>
                        Correct Answers
                    </Text>
                </View>
                <View style={defaultStyles.sideBySideBtnContainer}>
                    <TouchableOpacity
                        onPress={this.restartQuiz}
                        style={[defaultStyles.genericBtn,
                            defaultStyles.submitBtn,
                            defaultStyles.btnAlignment]}
                    >
                        <Text style={defaultStyles.submitBtnText}>
                            Restart Quiz
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.navigateToDeck}
                        style={[defaultStyles.genericBtn,
                            defaultStyles.submitBtn,
                            defaultStyles.btnAlignment]}
                    >
                        <Text style={defaultStyles.submitBtnText}>
                            Back to Deck
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    resultTxt: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 10
    }
})

export default QuestionSummaryView