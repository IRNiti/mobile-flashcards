import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Animated, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions'
import { defaultStyles } from './ContainerStyling'
import DeckCard from './DeckCard'

class DeckList extends Component {
    state = {
        opacity: new Animated.Value(1),
    }

    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    displayDeck = (key) => {
        const duration = 1000
        const { opacity } = this.state
        Animated.timing(opacity, {toValue: 0.01, duration: duration, useNativeDriver: true}).start()

        setTimeout(() => {
            this.props.navigation.navigate('DeckView', {
                title: this.props.decks[key].title
            })
            this.state.opacity.setValue(1)
        }, duration)
    }

    render() {
        const { decks } = this.props
        const {opacity} = this.state
        return(
            <View>
                {decks && Object.keys(decks).map((key) => (
                    <TouchableOpacity key={key}
                                      onPress={() => this.displayDeck(key)}
                    >
                        <Animated.View style={[defaultStyles.card, {opacity}]}>
                            <DeckCard title={decks[key].title} numCards={decks[key].questions.length}/>
                        </Animated.View>
                    </TouchableOpacity>
                ))}
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('NewDeck')}
                    >
                        <Animated.View
                            style={[
                                defaultStyles.genericBtn,
                                defaultStyles.submitBtn,
                                styles.btnAlignment,
                                {opacity}
                                ]}>
                            <Text style={defaultStyles.submitBtnText}>New Deck</Text>
                        </Animated.View>
                    </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    btnAlignment: {
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignItems: 'center'
    },
})

function mapStateToProps(state){
    return {
        decks: state
    }
}

export default connect(mapStateToProps)(DeckList)