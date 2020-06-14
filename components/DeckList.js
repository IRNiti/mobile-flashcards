import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import DeckCard from './DeckCard'

class DeckList extends Component {
    componentDidMount() {
        //TODO: retrieve decks from AsyncStorage
        //this.props.dispatch(handleInitialData())
    }

    //TODO: pass in deck title to navigate to DeckView
    render() {
        const { decks } = this.props
        return(
            <View>
                <Text>DeckList</Text>

                {decks && Object.keys(decks).map((key) => (
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('DeckView')}>
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

function mapStateToProps({ decks }){
    return {
        decks
    }
}

export default connect(mapStateToProps)(DeckList)