import React, { Component } from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import { connect } from 'react-redux'

class DeckView extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: navigation.state.params.title
        }
    }

    goToQuiz = () => {
        const {deck} = this.props
        if(deck.questions.length === 0){
            this.props.navigation.navigate('Error')
        } else {
            this.props.navigation.navigate('Quiz', {
                deckTitle: deck.title,
                questionIndex: 1,
                totalQuestions: deck.questions.length,
                correctQuestions: 0
            })
        }
    }

    render() {
        const {deck} = this.props
        return(
            <View>
                <Text>{deck.title}</Text>
                <Text>{deck.questions.length} {deck.questions.length === 1 ? 'card' : 'cards'}</Text>
                <TouchableOpacity onPress={() => {
                    this.props.navigation.navigate('NewCard', {
                        deckTitle: deck.title
                    })
                }}>
                    <Text>Add Card</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.goToQuiz}>
                    <Text>Start Quiz</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

function mapStateToProps(state, {navigation}){
    const {title} = navigation.state.params

    return {
        deck: state[title]
    }
}

export default connect(mapStateToProps)(DeckView)