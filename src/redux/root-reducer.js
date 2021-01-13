import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';
import usersReducer from './users/users.reducer';
import questionsReducer from './questions/questions.reducer';

const persistConfig = {
	key: 'root',
	storage: storageSession,
};

const rootReducer = combineReducers({
	users: usersReducer,
	questions: questionsReducer,
});

export default persistReducer(persistConfig, rootReducer);
