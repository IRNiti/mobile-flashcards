import AsyncStorage from '@react-native-community/async-storage'

const CARDS_STORAGE_KEY = 'UdacityMobileFlashcards:decks'

export const getDecks = async () => {
    return AsyncStorage.getItem(CARDS_STORAGE_KEY)
}

export const saveDeckTitle = async (deck) => {
    return AsyncStorage.mergeItem(CARDS_STORAGE_KEY, JSON.stringify(deck))
}

export const addCardToDeck = async (deckTitle, card) => {
    const result = await AsyncStorage.getItem(CARDS_STORAGE_KEY)
    const decks = JSON.parse(result)
    const value = {
        [deckTitle]: {
            ...decks[deckTitle],
            'questions': decks[deckTitle].questions.concat(card)
        }
    }
    return AsyncStorage.mergeItem(CARDS_STORAGE_KEY, JSON.stringify(value))
}

export const getDeck = async (id) => {
    const result = await AsyncStorage.getItem(CARDS_STORAGE_KEY)
    const decks = JSON.parse(result)
    return decks[id]
}