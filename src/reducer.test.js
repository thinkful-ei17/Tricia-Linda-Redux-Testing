import reducer from './reducer';
import {generateAuralUpdate, restartGame, makeGuess} from './actions';

describe('reducer', () => {
  it('should generateAuralUpdate', () => {
    const state = {
      guesses: [5, 10, 50],
      feedback: 'Hello I am feedback',
      auralStatus: '',
      correctAnswer: 10
    };

    const action = generateAuralUpdate();

    const newState = reducer(state, action);
    expect(newState).toEqual({
      guesses: [50, 10, 5],
      feedback: 'Hello I am feedback',
      auralStatus: "Here's the status of the game right now: Hello I am feedback You've made 3 guesses. In order of most- to least-recent, they are: 50, 10, 5",
      correctAnswer: 10
    })
  })

  it('should restartGame', () => {
    const state = {
      guesses: [],
      feedback: 'Make your guess!',
      auralStatus: '',
      correctAnswer: 30
    };

    const action = restartGame(state.correctAnswer);

    const newState = reducer(state, action);
    expect(newState).toEqual({
      guesses: [],
      feedback: 'Make your guess!',
      auralStatus: '',
      correctAnswer: action.correctAnswer
    })
  })

  it('should makeGuess', () => {
    const state = {
      guesses: [],
      feedback: 'Make your guess!',
      auralStatus: '',
      correctAnswer: 10
    };

    const action = makeGuess(5);

    const newState = reducer(state, action);
    expect(newState).toEqual({
      guesses: [5],
      feedback: 'You\'re Hot!',
      auralStatus: '',
      correctAnswer: 10
    })
  })
})
