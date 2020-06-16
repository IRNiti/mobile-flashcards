# Mobile Flashcards

## Description

This mobile application allows users to study using collections of flashcards. Users have the ability to create new collections (or decks) as well as to add cards to each deck. What's more, users can quiz themselves using the cards in each deck. Finally, if users have not completed at least a quiz during a given day, the app will display a local notification at 8 PM to remind them to complete a quiz.

The app is implemented using React Native and Redux for state management. Functionalities have been tested for web and Android. In order to run the Mobile Flashcards app, simply clone the repo, install dependencies using `npm install` and then run it using `npm run web`. To run it on your mobile device, install the Expo app from the Play Store and use it to scan the QR code that is displayed in your web browser after starting the app.

## Data

User created data is stored in local storage using AsyncStorage which manages an object in the following shape:

`{
   React: {
     title: 'React',
     questions: [
       {
         question: 'What is React?',
         answer: 'A library for managing user interfaces'
       },
       {
         question: 'Where do you make Ajax requests in React?',
         answer: 'The componentDidMount lifecycle event'
       }
     ]
   },
   JavaScript: {
     title: 'JavaScript',
     questions: [
       {
         question: 'What is a closure?',
         answer: 'The combination of a function and the lexical environment within which that function was declared.'
       }
     ]
   }
 }`

The following 4 methods have been implemented to give access to the data in the storage and can be found in utils/api.js:

* `getDecks()`
* `getDeck(deckTitle)`
* `saveDeckTitle(deck)`
* `addCardToDeck(deckTitle, card)`

1) `getDecks()` Method

*Description*: Get all of the existing decks from storage.  
*Return Value*: Promise containing a serialized version of the deck data (which should look like the object described previously).

2) `getDeck(deckTitle)` Method

*Description*: Get data for the deck corresponding to the given title.
*Parameters*: String representing the deck title.
*Return Value*: Promise containing a serialized version of the data for the given deck.

3) `saveDeckTitle(deck)` Method

*Description*: Save a new deck in storage.  
*Parameters*:  Object representing a deck in the following format: 
`[deckTitle]: {
    'title': deckTitle,
    'questions': []
}`
*Return Value*: Promise confirming whether the operation was successful or not.

4) `addCardToDeck(deckTitle, card)` Method

*Description*: Save a new card to the given deck.
*Parameters*: String representing the deck title and an object representing a card which includes the following properties `question` and `answer`
*Return Value*: Promise confirming whether the operation was successful or not.
