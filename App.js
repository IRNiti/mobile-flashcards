import React, {Component} from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import DeckList from './components/DeckList'
import DeckView from './components/DeckView'
import NewDeckForm from './components/NewDeckForm'
import NewQuestionForm from './components/NewQuestionForm'
import QuestionView from './components/QuestionView'
import QuestionAnswerView from './components/QuestionAnswerView'
import QuizSummaryView from './components/QuizSummaryView'

const RootStack = createStackNavigator({
    Decks: DeckList,
    DeckView: DeckView,
    NewDeck: NewDeckForm,
    NewCard: NewQuestionForm,
    Quiz: QuestionView,
    QuizAnswer: QuestionAnswerView,
    QuizSummary: QuizSummaryView
    },
    {
        initialRouteName: 'Decks'
    })

const AppContainer = createAppContainer(RootStack)

export default class App extends Component {
  render() {
    return (
        <AppContainer/>
    )
  }
}
