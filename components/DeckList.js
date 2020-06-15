import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Animated } from 'react-native'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions'
import DeckCard from './DeckCard'

class DeckList extends Component {
    /*state = {
        opacity: new Animated.Value(1),
        width: new Animated.Value(300),
        height: new Animated.Value(300)
    }*/

    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    displayDeck = (key) => {
        /*const { opacity, width, height } = this.state
        Animated.timing(opacity, {toValue: 0, duration: 1000}).start()
        Animated.spring(width, {toValue: 0, speed: 5}).start()
        Animated.spring(height, {toValue: 0, speed: 5}).start()*/

        this.props.navigation.navigate('DeckView', {
            title: this.props.decks[key].title
        })
    }

    render() {
        const { decks } = this.props
        return(
            <View>
                {decks && Object.keys(decks).map((key) => (
                    <TouchableOpacity key={key}
                                      onPress={() => this.displayDeck(key)}
                    >
                        <View>
                            <DeckCard title={decks[key].title} numCards={decks[key].questions.length}/>
                        </View>
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