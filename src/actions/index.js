import * as API from '../utils/api';

export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const SAVE_DECK = 'SAVE_DECK';
export const SAVE_CARD = 'SAVE_CARD';
export const DELETE_DECK = 'DELETE_DECK';

function receiveDecks(decks) {
    return {
        type: RECEIVE_DECKS,
        decks
    };
}

function deleteDeck(title) {
    return {
        type: DELETE_DECK,
        title
    }
}

function saveDeck(title) {
    return {
        type: SAVE_DECK,
        title
    };
}

export function handleSaveDeck(title) {
    return dispatch => {
        return API.saveDeckTitle(title)
            .then(deck => dispatch(saveDeck(deck)));
    };
}

function saveCard(title, card) {
    return {
        type: SAVE_CARD,
        title,
        card
    }
}

export function handleSaveCard(title, card) {
    return dispatch => {
        return API.saveCardToDeck(title, card)
            .then(card => dispatch(saveCard(title, card)));
    }
}

export function handleInitialData() {
    return dispatch => {
        return API.getDecks()
            .then(decks => dispatch(receiveDecks(decks)));
    };
}

export function handleDeleteDeck(title) {
    return dispatch => {
        return API.deleteDeck(title)
            .then(() => dispatch(deleteDeck(title)));
    };
}