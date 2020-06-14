import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions'
import DeckCard from './DeckCard'

class DeckList extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    render() {
        const { decks } = this.props
        return(
            <View>
                {decks && Object.keys(decks).map((key) => (
                    <TouchableOpacity key={key}
                                      onPress={() => this.props.navigation.navigate('DeckView', {
                                          title: decks[key].title
                                      })}>
                        <DeckCard title={decks[key].title} numCards={decks[key].questions.length}/>
                    </TouchableOpacity>
                ))}

                <TouchableOpacity onPress={() => this.props.navigation.navigate('NewDeck')}>
                    <Text>New Deck</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

function mapStateToProps(state){
    return {
        decks: state
    }
}

export default connect(mapStateToProps)(DeckList)