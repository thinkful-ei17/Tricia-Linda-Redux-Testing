import { generateAuralUpdate, restartGame, makeGuess } from './actions';
import { GENERATE_AURAL_UPDATE, RESTART_GAME, MAKE_GUESS } from './actions';
import { getUnpackedSettings } from 'http2';


describe('generateAuralUpdate', () => {
    it('Should return the generateAuralUpdate Action', () => {
        const action = generateAuralUpdate();
        expect(action).toEqual({
            type: GENERATE_AURAL_UPDATE
        });
    });
}); //end describe - generateAuralUpdate

describe('restartGame', () => {
    it('Should return the restartGame Action', () => {
        const answer = 'true';
        const action = restartGame(answer);
        expect(action).toEqual({
            type: RESTART_GAME,
            correctAnswer: answer
        });
    });
});

describe('makeGuess', () => {
    it('Should return the makeGuess Action', () => {
        const guess = 55;
        const action = makeGuess(guess);
        expect(action).toEqual({
            type: MAKE_GUESS,
            guess: guess
        });
    });
});