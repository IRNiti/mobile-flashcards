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