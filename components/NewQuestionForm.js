import React, { Component } from 'react'
import {View, Text, TextInput, TouchableOpacity} from 'react-native'
import { connect } from 'react-redux'
import { handleAddCard } from '../actions'
import { defaultStyles } from './ContainerStyling'

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
            <View style={defaultStyles.card}>
                <Text style={[defaultStyles.formInputTxt, defaultStyles.formInputMargins]}>
                    Question
                </Text>
                <TextInput
                    placeholder="Enter question here"
                    onChange={(event) => this.handleChange(event,'question')}
                    value={this.state.question}
                    style={defaultStyles.formInputBox}
                />
                <Text style={[defaultStyles.formInputTxt, defaultStyles.formInputMargins]}>
                    Answer
                </Text>
                <TextInput
                    placeholder="Enter answer here"
                    onChange={(event) => this.handleChange(event,'answer')}
                    value={this.state.answer}
                    style={defaultStyles.formInputBox}
                />
                <TouchableOpacity
                    onPress={this.saveQuestion}
                    style={[defaultStyles.genericBtn, defaultStyles.submitBtn]}
                >
                    <Text style={defaultStyles.submitBtnText}>
                        Submit
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default connect()(NewQuestionForm)