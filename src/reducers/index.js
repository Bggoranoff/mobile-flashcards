import { SAVE_CARD, SAVE_DECK, RECEIVE_DECKS } from '../actions';

export default function decks(state = {}, action) {
    switch(action.type) {
        case RECEIVE_DECKS:
            return { 
                ...state, 
                ...action.decks
            };
        case SAVE_DECK:
            return { 
                ...state, 
                [action.deck.title]: { title: action.deck.title, questions: [] } 
            };
        case SAVE_CARD:
            return {
                ...state,
                [action.title]: { title: action.title, questions: { ...state[action.title].questions, card } }
            };
    }
}