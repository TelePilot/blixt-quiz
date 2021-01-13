import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
const Button = styled.button`
	width: 350px;
	height: 150px;
	font-size: 56px;
	background: green;
	color: white;
	border: 0;
	border-radius: 5px;
	cursor: pointer;
	-webkit-text-stroke: 0;
	margin-top: 25px;
`;

const AnswerButton = ({ answer }) => {
	const [locked, setLocked] = useState(false);
	const [questionAnswer, setQuestionAnswer] = useState('Answer');
	useEffect(() => {
		if (locked) {
			let countDown = 3;

			const interval = setInterval(() => {
				if (countDown < 0) {
					setQuestionAnswer(answer);
					clearInterval(interval);
				} else {
					setQuestionAnswer(`${countDown}`);
					countDown -= 1;
				}
			}, 1000);

			return () => {
				setQuestionAnswer('Answer');
				clearInterval(interval);
			};
		}
	}, [locked, answer]);
	return <Button onClick={() => setLocked(true)}>{questionAnswer}</Button>;
};

export default AnswerButton;
