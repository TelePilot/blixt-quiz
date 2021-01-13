import React, { useEffect } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import User from '../components/user.component';
import Category from '../components/category.component';
import { connect } from 'react-redux';
import { selectCurrentUser } from '../redux/users/users.actions';
import {
	selectQuestion,
	newCategory,
} from '../redux/questions/questions.actions';
const Container = styled.div`
	position: relative;
	background: url(https://www.leadquizzes.com/wp-content/uploads/2019/02/New-blog-graphic.jpg);
	height: auto;
	min-height: 100vh;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	width: 100%;
	margin-bottom: 100px;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	color: yellow;
	-webkit-text-stroke: 0.1px black;
`;
const Header = styled.div`
	width: 100%;
	box-sizing: border-box;
	margin: 1.5%;
	height: auto;
	display: flex;
	justify-content: flex-start;
	flex-flow: wrap;
`;
const UserCont = styled.div`
	width: 80px;
`;

const CurrUserContainer = styled.div`
	width: 100%;
`;
const CategoryPicker = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const QuizContainer = styled.div`
	width: 100%;
	display: grid;
	box-sizing: border-box;
	padding-right: 2%;
	align-items: center;
	grid-template-columns: 1fr 5fr;
	height: auto;
`;
const CategoryHeader = styled.h2`
	font-size: 86px;
	color: yellow;
	margin: 0;
	-webkit-text-stroke: 0.1px black;
`;

const CategoryContainer = styled.div`
	width: 100%;
	height: 95%;
	border: 1px solid black;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	flex-flow: column;
	box-sizing: border-box;
	padding: 2%;
`;

const UserContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 100%;
	flex-flow: column;
	box-sizing: border-box;
	padding: 15% 5%;
`;

const Quiz = ({
	users,
	categories,
	currentUser,
	selectQuestion,
	newCategory,
	history,
}) => {
	return (
		<Container>
			<QuizContainer>
				<UserContainer>
					<Header>
						{users.length
							? users.map((user, id) => {
									if (user === currentUser) {
										return;
									}
									return (
										<UserCont key={id}>
											<User user={user} />
										</UserCont>
									);
							  })
							: null}
					</Header>
					<CurrUserContainer>
						{currentUser ? (
							<User fontSize='72px' heartSize='50px' user={currentUser} />
						) : null}
					</CurrUserContainer>
				</UserContainer>
				{categories ? (
					<CategoryContainer>
						<CategoryHeader>Choose a Category!</CategoryHeader>
						<CategoryPicker>
							<div
								onClick={() => {
									selectQuestion(categories[0]);
									history.push('/question');
								}}
							>
								<Category category={categories[0]}></Category>
							</div>
							<div
								onClick={() => {
									selectQuestion(categories[1]);
									history.push('/question');
								}}
							>
								<Category category={categories[1]}></Category>
							</div>
						</CategoryPicker>
					</CategoryContainer>
				) : null}
			</QuizContainer>
		</Container>
	);
};
const mapStateToProps = state => ({
	users: state.users.users,
	currentUser: state.users.currentUser,
	categories: state.questions.categories,
});
const mapDispatchToProps = dispatch => ({
	selectQuestion: question => dispatch(selectQuestion(question)),
	newCategory: () => dispatch(newCategory()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Quiz));
