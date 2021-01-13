import UsersActionTypes from './users.types';
import {
	increaseIndex,
	removeUser,
	removeUserLife,
	selectCurrentUser,
} from './users.utils';

const INITIAL_STATE = {
	users: [],
	currentUser: '',
	challenger: '',
	index: 0,
};

const usersReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case UsersActionTypes.ADD_USER:
			return {
				...state,
				users: [
					...state.users,
					{ name: action.payload, lives: 3, id: state.users.length + 1 },
				],
			};
		case UsersActionTypes.REMOVE_LIFE:
			return {
				...state,
				users: removeUserLife(state.users, action.payload),
			};
		case UsersActionTypes.CLEAR_USER:
			return {
				...state,
				users: removeUser(state.users, action.payload),
			};
		case UsersActionTypes.SELECT_CURRENT_USER:
			return {
				...state,
				currentUser: state.users[0],
			};
		case UsersActionTypes.SELECT_NEW_USER:
			return {
				...state,
				index: increaseIndex(state.users, state.index),
				currentUser: selectCurrentUser(state.users, state.index),
			};
		case UsersActionTypes.SELECT_CHALLENGER:
			return {
				...state,
				challenger: action.payload,
			};
		default:
			return state;
	}
};

export default usersReducer;
