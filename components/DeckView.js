import React, { Component } from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

class DeckView extends Component {
    //update to make title show actual deck title instead of hardcoded value
    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: 'Deck1'
        }
    }

    render() {
        const numCards = 5
        return(
            <View>
                <Text>Deck1</Text>
                <Text>{numCards} cards</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('NewCard')}>
                    <Text>Add Card</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate('Quiz', {
                            questionIndex: 1,
                            totalQuestions: numCards,
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

export default DeckView