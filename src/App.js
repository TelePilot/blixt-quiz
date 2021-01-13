import React, { useEffect } from 'react';

import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { initCategories } from './redux/questions/questions.actions';
import { loadCategories } from './redux/questions/questions.utils';
import { selectCurrentUser } from './redux/users/users.actions';
import './App.css';

import Quiz from './pages/quiz.component';
import Players from './pages/players.component';
import Question from './pages/question.component';
import Challenge from './pages/challenge.component';

const App = ({ dispatch }) => {
	useEffect(() => {
		dispatch(initCategories(loadCategories()));
		dispatch(selectCurrentUser());
	}, []);
	return (
		<div className='App'>
			<Switch>
				<Route path={'/'} component={Players} exact />
				<Route path={'/quiz'} exact component={Quiz} />
				<Route path={'/question'} exact component={Question} />
				<Route path={'/challenge'} exact component={Challenge} />
			</Switch>
		</div>
	);
};

export default connect()(App);
