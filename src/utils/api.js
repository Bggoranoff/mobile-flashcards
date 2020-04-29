import { AsyncStorage } from 'react-native';
import { STORAGE_KEY } from './_storage';


export function getDecks() {
    return AsyncStorage.getItem(STORAGE_KEY)
        .then(JSON.parse);
}

export function getDeck(id) {
    return AsyncStorage.getItem(STORAGE_KEY)
        .then(result => result[id]);
}

export function saveDeckTitle(title) {
    return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
        [title]: {
            title,
            questions: []
        }
    }));
}

export function saveCardToDeck(title, { question, answer }) {
    return AsyncStorage.getItem(STORAGE_KEY)
        .then(JSON.parse)
        .then(results => {
            results = { ...results, [title]: { ...results[title], questions: [...results[title].questions, { question, answer }] } };
            AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(results));
            return { question, answer };
        })
}