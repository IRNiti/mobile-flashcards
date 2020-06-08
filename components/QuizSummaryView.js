import React, { Component } from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

class QuestionSummaryView extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: 'Quiz'
        }
    }

    render() {
        const {navigation} = this.props
        const totalQuestions = navigation.getParam('totalQuestions', '0')
        const correctQuestions = navigation.getParam('correctQuestions', '0')

        return(
            <View>
                <Text>{correctQuestions/totalQuestions*100}%</Text>
                <Text>Correct Answers</Text>
                <TouchableOpacity onPress={() => {
                    this.props.navigation.navigate('Quiz', {
                        questionIndex: 1,
                        totalQuestions: totalQuestions,
                        correctQuestions: 0
                    })
                }}
                >
                    <Text>Restart Quiz</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('DeckView')}>
                    <Text>Back to Deck</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default QuestionSummaryView