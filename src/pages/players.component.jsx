import React, { useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import User from '../components/user.component';
import { addUser } from '../redux/users/users.actions';
const Header = styled.h1`
	font-size: 66px;
	margin-bottom: 0;
`;
const SubHeader = styled.h2`
	font-size: 48px;
`;
const Background = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-flow: column;
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-position: center;
	background-size: cover;

	min-height: 100vh;
	height: auto;
	box-sizing: border-box;
	padding: 25px 0;
	color: yellow;
	text-align: center;
	width: 100%;
	background: url(https://64.media.tumblr.com/6c5c26be75f17d94dd43b3b50afd8ccc/tumblr_pfcnn14NDt1wpn9lqo2_r1_1280.png);
`;

const UserContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	width: 50%;
`;
const Ready = styled(Link)`
	box-sizing: border-box;
	padding: 20px 40px;
	font-size: 18px;
	text-decoration: none;
	color: white;
	border-radius: 5px;
	background: rgb(247, 255, 0);
	background: linear-gradient(
		298deg,
		rgba(247, 255, 0, 1) 0%,
		rgba(255, 121, 0, 1) 100%
	);
	margin: 20px 0 0 0;
`;

const Players = ({ users, dispatch }) => {
	const formRef = useRef(null);
	const inputRef = useRef(null);

	const onSubmit = event => {
		event.preventDefault();
		dispatch(addUser(inputRef.current.value));
		formRef.current.reset();
	};

	return (
		<Background>
			<Header>Blixt Quiz of Life</Header>
			<Ready to='/quiz'>Ready?</Ready>
			<SubHeader>How many Players?</SubHeader>

			<form ref={formRef} onSubmit={onSubmit}>
				<label>
					Name:
					<input ref={inputRef} type='text' name='name' />
				</label>
				<input type='submit' value='Submit' />
			</form>

			<UserContainer>
				{users.length
					? users.map((user, id) => (
							<User heartSize={'0px'} user={user} key={id} />
					  ))
					: null}
			</UserContainer>
		</Background>
	);
};

const mapStateToProps = ({ users: { users } }) => ({
	users,
});

export default connect(mapStateToProps)(Players);
