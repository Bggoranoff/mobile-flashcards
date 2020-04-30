import { SAVE_CARD, SAVE_DECK, RECEIVE_DECKS, DELETE_DECK } from '../actions';
import { combineReducers } from 'redux';

function decks(state = {}, action) {
    switch (action.type) {
        case RECEIVE_DECKS:
            return {
                ...state,
                ...action.decks
            };
        case SAVE_DECK:
            return {
                ...state,
                [action.title]: { title: action.title, questions: [] }
            };
        case SAVE_CARD:
            return {
                ...state,
                [action.title]: { title: action.title, questions: [ ...state[action.title].questions, action.card ] }
            };
        case DELETE_DECK: 
            return {
                ...state,
                [action.title]: null
            }
        default: return state;
    }
}

export default combineReducers({ decks });