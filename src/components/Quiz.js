import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import Card from './Card';
import NoCardsError from './NoCardsError';
import { clearLocalNotification, setLocalNotification } from '../utils/helpers';

class Quiz extends React.Component {
    state = {
        questions: [...this.props.decks[this.props.route.params.title].questions]
    }

    answerCorrect = () => {
        if (this.state.questions.length <= 1) {
            this.props.navigation.navigate('List');
            clearLocalNotification().then(setLocalNotification).catch(() => alert('Please request notifications in order for us to help you study regularly.'));
        }
        let notAnsweredQuestions = this.state.questions;
        notAnsweredQuestions.shift();
        this.setState({ questions: notAnsweredQuestions });
    }

    answerIncorrect = () => {
        let reorderedQuestions = this.state.questions;
        reorderedQuestions.push(reorderedQuestions.shift());
        this.setState({ questions: reorderedQuestions });
    }

    render() {
        return <View>{this.state.questions.length > 0 ? <Card key={this.state.questions[0].question} card={this.state.questions[0]} answerCorrect={this.answerCorrect} answerIncorrect={this.answerIncorrect} /> : <NoCardsError />}</View>
    }
}

function mapStateToProps({ decks }) {
    return {
        decks
    }
}

export default connect(mapStateToProps)(Quiz);