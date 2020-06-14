import React, { Component } from 'react'
import {View, Text, TextInput, TouchableOpacity} from 'react-native'
import { connect } from 'react-redux'
import { handleAddCard } from '../actions'

class NewQuestionForm extends Component {
    state = {
        question: '',
        answer: ''
    }

    handleChange = (event, inputType) => {
        const input = event.nativeEvent.text
        this.setState(() => ({
            [inputType]: input
        }))
    }

    saveQuestion = () => {
        const {navigation} = this.props
        this.props.dispatch(handleAddCard(navigation.state.params.deckTitle, {
            question: this.state.question,
            answer: this.state.answer
        }, () => navigation.navigate('DeckView', {
            title: navigation.state.params.deckTitle
        })))
    }

    render() {
        return(
            <View>
                <Text>Question</Text>
                <TextInput
                    placeholder="Enter question here"
                    onChange={(event) => this.handleChange(event,'question')}
                    value={this.state.question}
                />
                <Text>Answer</Text>
                <TextInput
                    placeholder="Enter answer here"
                    onChange={(event) => this.handleChange(event,'answer')}
                    value={this.state.answer}
                />
                <TouchableOpacity onPress={this.saveQuestion}>
                    <Text>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default connect()(NewQuestionForm)