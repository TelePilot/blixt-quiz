import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
	removeQuestion,
	newCategory,
} from '../redux/questions/questions.actions';
import { selectNewUser } from '../redux/users/users.actions';
import User from '../components/user.component';
import imageUrlBuilder from '@sanity/image-url';
import sanityClient from '../Client';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
	return builder.image(source);
}

const Cont = styled.div`
	width: 100%;
	height: 100vh;
	background: rgb(34, 193, 195);
	background: linear-gradient(
		277deg,
		rgba(34, 193, 195, 1) 0%,
		rgba(113, 45, 253, 1) 100%
	);
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	color: yellow;
	-webkit-text-stroke: 0.1px black;
`;

const QuestionContainer = styled.div`
	width: 80%;
	height: 70%;
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-position: center;
	background-size: cover;
	position: relative;
`;
const QuestionCont = styled.div`
	position: relative;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	z-index: 1;
	flex-flow: column;
	height: 100%;
	width: 100%;
`;

const Overlay = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 0;
	background: rgba(0, 0, 0, 0.4);
`;

const CurrentUserContainer = styled.div`
	position: absolute;
	width: 20%;
	bottom: 5%;
	left: 2%;
`;

const QuestionHeader = styled.h1`
	font-size: 7vw;
	margin: 0 auto;
	margin-top: 2%;
`;

const QuestionQ = styled.h3`
	font-size: 4.5vw;
	margin: 0 auto;
	text-align: center;
	margin-top: 5%;
	width: 80%;
`;

const AnswerButton = styled.button`
	width: 250px;
	height: 100px;
	background: green;
	font-size: 42px;
	color: white;
	cursor: pointer;
`;
const ChallengeButton = styled.button`
	width: 250px;
	height: 100px;
	background: red;
	font-size: 42px;
	color: white;
	cursor: pointer;
`;
const ButtonContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: auto;
	width: 60%;
	margin-top: 8%;
`;

const Question = ({
	currentUser,
	currentQuestion,
	removeQuestion,
	updateUser,
	newCategory,
	history,
}) => {
	const category = currentQuestion[0];
	const question = currentQuestion[1];
	return (
		<Cont>
			<QuestionContainer
				style={{
					backgroundImage: `url(${urlFor(category.image).url()})`,
				}}
			>
				<Overlay />
				<QuestionCont>
					<QuestionHeader>{category.categoryName}</QuestionHeader>
					<QuestionQ>{question.question}</QuestionQ>
					<ButtonContainer>
						<AnswerButton
							onClick={() => {
								updateUser();
								removeQuestion();
								newCategory();
								history.push('/quiz');
							}}
						>
							Answer
						</AnswerButton>
						<ChallengeButton>Challenge</ChallengeButton>
					</ButtonContainer>
				</QuestionCont>
			</QuestionContainer>
			<CurrentUserContainer>
				{currentUser ? (
					<User fontSize='72px' heartSize='50px' user={currentUser} />
				) : null}
			</CurrentUserContainer>
		</Cont>
	);
};

const mapStateToProps = state => ({
	currentUser: state.users.currentUser,
	currentQuestion: state.questions.currentQuestion,
});

const mapDispatchToProps = dispatch => ({
	removeQuestion: () => dispatch(removeQuestion()),
	updateUser: () => dispatch(selectNewUser()),
	newCategory: () => dispatch(newCategory()),
});

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(Question)
);
