import React, { Component } from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import { connect } from 'react-redux'

class DeckView extends Component {
    //update to make title show actual deck title instead of hardcoded value
    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: navigation.state.params.title
        }
    }

    render() {
        const {deck} = this.props
        return(
            <View>
                <Text>{deck.title}</Text>
                <Text>{deck.questions.length} {deck.questions.length === 1 ? 'card' : 'cards'}</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('NewCard')}>
                    <Text>Add Card</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate('Quiz', {
                            questionIndex: 1,
                            totalQuestions: deck.questions.length,
                            correctQuestions: 0
                        })
                    }}
                >
                    <Text>Start Quiz</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

function mapStateToProps(state, {navigation}){
    const {title} = navigation.state.params

    console.log(state)

    return {
        deck: state[title]
    }
}

export default connect(mapStateToProps)(DeckView)