import React, { Component } from 'react'
import {View, Text, TouchableOpacity } from 'react-native'
import { HeaderBackButton } from 'react-navigation-stack'
import { connect } from 'react-redux'
import { defaultStyles } from './ContainerStyling'

class DeckView extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: navigation.state.params.title,
            headerLeft:(<HeaderBackButton onPress={()=>{navigation.navigate('Decks')}}/>)
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
                    <Text style={defaultStyles.headerTxt}>
                        {deck.title}
                    </Text>
                    <Text style={defaultStyles.descriptionTxt}>
                        {deck.questions.length} {deck.questions.length === 1 ? 'card' : 'cards'}
                    </Text>
                </View>
                <View style={defaultStyles.sideBySideBtnContainer}>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate('NewCard', {
                                deckTitle: deck.title
                            })
                        }}
                        style={[defaultStyles.genericBtn,
                            defaultStyles.submitBtn,
                            defaultStyles.btnAlignment]}
                    >
                        <Text style={defaultStyles.submitBtnText}>
                            Add Card
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.goToQuiz}
                        style={[defaultStyles.genericBtn,
                            defaultStyles.submitBtn,
                            defaultStyles.btnAlignment]}
                    >
                        <Text style={defaultStyles.submitBtnText}>
                            Start Quiz
                        </Text>
                    </TouchableOpacity>
                </View>
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