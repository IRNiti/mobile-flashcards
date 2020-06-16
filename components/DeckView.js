import React, { Component } from 'react'
import {View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { defaultStyles } from './ContainerStyling'

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
                <View style={defaultStyles.card}>
                    <Text style={defaultStyles.headerTxt}>{deck.title}</Text>
                    <Text style={defaultStyles.descriptionTxt}>{deck.questions.length} {deck.questions.length === 1 ? 'card' : 'cards'}</Text>
                </View>
                <View style={styles.btnContainer}>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate('NewCard', {
                                deckTitle: deck.title
                            })
                        }}
                        style={[defaultStyles.submitBtn, styles.btnAlignment]}
                    >
                        <Text style={defaultStyles.submitBtnText}>Add Card</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.goToQuiz}
                        style={[defaultStyles.submitBtn, styles.btnAlignment]}
                    >
                        <Text style={defaultStyles.submitBtnText}>Start Quiz</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    btnContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    btnAlignment: {
        justifyContent: 'center',
    },
})

function mapStateToProps(state, {navigation}){
    const {title} = navigation.state.params

    return {
        deck: state[title]
    }
}

export default connect(mapStateToProps)(DeckView)