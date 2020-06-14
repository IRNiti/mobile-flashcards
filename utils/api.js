import AsyncStorage from '@react-native-community/async-storage'

const CARDS_STORAGE_KEY = 'UdacityMobileFlashcards'

export const getDecks = async () => {
    return AsyncStorage.getItem(CARDS_STORAGE_KEY)
}

export const saveDeckTitle = async (deck) => {
    return AsyncStorage.mergeItem(CARDS_STORAGE_KEY, JSON.stringify(deck))
}