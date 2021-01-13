import QuestionsActionTypes from './questions.types';

export const initCategories = categories => ({
	type: QuestionsActionTypes.LOAD_CATEGORIES,
	payload: categories,
});

export const newCategory = () => ({
	type: QuestionsActionTypes.NEW_CATEGORY,
});

export const selectQuestion = question => ({
	type: QuestionsActionTypes.SELECT_QUESTION,
	payload: question,
});

export const removeQuestion = () => ({
	type: QuestionsActionTypes.REMOVE_QUESTION,
});
