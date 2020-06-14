import { getDecks, saveDeckTitle } from '../utils/api'

export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_QUESTION = 'ADD_QUESTION'

export function receiveDecks(decks){
    return{
        type: RECEIVE_DECKS,
        decks
    }
}

export function addDeck(deck){
    return{
        type: ADD_DECK,
        deck
    }
}

export function addQuestion(deckTitle, question){
    return {
        type: ADD_QUESTION,
        deckTitle,
        question
    }
}

//TODO: implement action creators once AsyncStorage is implemented
//TODO: implement error handling for storage errors
export function handleInitialData() {
    return (dispatch) => {
        return getDecks().then((results) => {
            const decks = JSON.parse(results)
            dispatch(receiveDecks(decks))
        }).catch((err) => {
            console.warn('Error retrieving decks: ', err)
            alert('Error retrieving decks')
        })
    }
}

export function handleAddDeck(deck, cb) {
    return (dispatch) => {
        return saveDeckTitle(deck).then((result) => {
            console.log(result)
            //addDeck takes in a deck as input, does AsyncStorage return stored value?
            //if not, have to modify saveDeckTitle to return value
            dispatch(addDeck(deck))
            cb()
        }).catch((err) => {
            console.warn('Error submitting deck: ', err)
            alert('Error submitting deck')
        })
    }
}