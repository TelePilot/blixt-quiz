import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
	width: 100%;
	height: 95%;
	border: 1px solid black;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-flow: column;
	box-sizing: border-box;
	padding: 2%;
`;
const ChallengerCont = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
	box-sizing: border-box;
	padding: 5% 15%;
	width: 100%;
	grid-gap: 10px;
	height: 50%;
`;
const UserCont = styled.div`
	width: 100%;
	border: 1px solid black;
	cursor: pointer;
`;
const ChallengerBoxContainer = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const ChallengerBox = styled.div`
	width: 250px;
	height: 255px;
	border: 1px solid black;
	box-sizing: border-box;
	padding: 0 2%;
`;
const VS = styled.img`
	width: 100px;
	height: auto;
`;

const Question = styled.h2`
	font-size: 48px;
	text-align: center;
`;

const Challenge = ({ currentUser, question, setChallenge, setReset }) => {
	// const [challengers, setChallengers] = useState('');
	// const [challenger, setChallenger] = useState('');
	// const [answering, setAnswering] = useState(false);
	// useEffect(() => {
	// 	const challengerArray = users.filter(item => item !== user);
	// 	setChallengers(challengerArray);
	// }, [users, user]);
	// const currUser = user;
	// const correct = corrUser => {
	// 	const index = users.indexOf(corrUser);
	// 	console.log(index);
	// 	let items = [...users];

	// 	let item = { ...items[index] };
	// 	// 3. Replace the property you're intested in
	// 	item.lives -= 1;
	// 	// 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
	// 	items[index] = item;
	// 	// 5. Set the state to our new copy
	// 	setUsers(items);
	// 	setReset(true);
	// 	setChallenge(false);
	// };

	return (
		<Container>
			{/* {answering ? <Question>{question.question}</Question> : null}
			<ChallengerBoxContainer>
				<ChallengerBox onClick={() => correct(users[challenger])}>
					<User user={user} heartSize='48px' />
				</ChallengerBox>
				<VS src='http://www.pngmart.com/files/11/Versus-PNG-Clipart.png' />
				<ChallengerBox onClick={() => correct(currUser)}>
					{challenger ? (
						<User user={users[challenger]} heartSize='48px' />
					) : null}
				</ChallengerBox>
			</ChallengerBoxContainer>
			{challenger ? (
				<div onClick={() => setAnswering(true)}>
					<AnswerButton answer={question.answer} />
				</div>
			) : null}
			{answering ? null : (
				<>
					<h2>Select A Challenger</h2>
					<ChallengerCont>
						{challengers.length > 0
							? challengers.map((user, id) => (
									<UserCont
										onClick={() => setChallenger(users.indexOf(user))}
										key={id}
									>
										<User user={user} />
									</UserCont>
							  ))
							: null}
					</ChallengerCont>
				</>
			)} */}
		</Container>
	);
};

export default Challenge;
