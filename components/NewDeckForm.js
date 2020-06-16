import React, { Component } from 'react'
import {View, Text, TextInput, TouchableOpacity} from 'react-native'
import { handleAddDeck } from '../actions'
import { connect } from 'react-redux'
import { defaultStyles } from './ContainerStyling'

class NewDeckForm extends Component {
    state = {
        title: ''
    }

    handleChange = (event) => {
        const input = event.nativeEvent.text
        this.setState(() => ({
            title: input
        }))
    }

    saveDeck = () => {
        this.props.dispatch(handleAddDeck({
            [this.state.title]: {
                title: this.state.title,
                questions: []
            }
        }, () => this.props.navigation.navigate('DeckView', {
                title: this.state.title
            }))
        )
    }

    render() {
        return(
            <View style={defaultStyles.card}>
                <Text style={[defaultStyles.formInputTxt, defaultStyles.formInputMargins]}>
                    Deck Title
                </Text>
                <TextInput
                    placeholder="Enter deck title here"
                    value={this.state.title}
                    onChange={this.handleChange}
                    style={defaultStyles.formInputBox}
                />
                <TouchableOpacity
                    onPress={this.saveDeck}
                    style={[defaultStyles.genericBtn, defaultStyles.submitBtn]}
                >
                    <Text style={defaultStyles.submitBtnText}>
                        Save
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default connect()(NewDeckForm)