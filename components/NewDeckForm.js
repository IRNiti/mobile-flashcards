import React, { Component } from 'react'
import {View, Text, TextInput, TouchableOpacity} from 'react-native'

class NewDeckForm extends Component {
    render() {
        return(
            <View>
                <Text>Title</Text>
                <TextInput placeholder="Enter deck title here"/>
                <TouchableOpacity>
                    <Text>Save</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default NewDeckForm