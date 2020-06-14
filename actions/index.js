import { getDecks, saveDeckTitle, addCardToDeck } from '../utils/api'

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
            dispatch(addDeck(deck))
            cb()
        }).catch((err) => {
            console.warn('Error saving deck: ', err)
            alert('Error saving deck')
        })
    }
}

export function handleAddCard(title, card, cb) {
    return (dispatch) => {
        return addCardToDeck(title, card).then((result) => {
            console.log(result)
            dispatch(addQuestion(title, card))
            cb()
        }).catch((err) => {
            console.warn('Error saving question: ', err)
            alert('Error saving question')
        })
    }
}