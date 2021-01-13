import QuestionsActionTypes from './questions.types';
import { removeQuestion, newCategory, newQuestion } from './questions.utils';

const INITIAL_STATE = {
	categories: [],
	currentQuestion: null,
};

const questionsReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case QuestionsActionTypes.LOAD_CATEGORIES:
			return {
				...state,
				categories: newCategory(action.payload),
			};
		case QuestionsActionTypes.NEW_CATEGORY:
			return {
				...state,
				categories: newCategory(state.categories),
			};
		case QuestionsActionTypes.SELECT_QUESTION:
			return {
				...state,
				currentQuestion: newQuestion(action.payload, action.payload.questions),
			};
		case QuestionsActionTypes.REMOVE_QUESTION:
			return {
				...state,
				categories: removeQuestion(state.categories, state.currentQuestion),
			};

		default:
			return state;
	}
};

export default questionsReducer;
