import UsersActionTypes from './users.types';

export const addUser = user => ({
	type: UsersActionTypes.ADD_USER,
	payload: user,
});

export const removeLife = user => ({
	type: UsersActionTypes.REMOVE_LIFE,
	payload: user,
});

export const clearUser = user => ({
	type: UsersActionTypes.CLEAR_USER,
	payload: user,
});

export const selectCurrentUser = () => ({
	type: UsersActionTypes.SELECT_CURRENT_USER,
});
export const selectNewUser = () => ({
	type: UsersActionTypes.SELECT_NEW_USER,
});

export const selectChallenger = user => ({
	type: UsersActionTypes.SELECT_CHALLENGER,
	payload: user,
});
