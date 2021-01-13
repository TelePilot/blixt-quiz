import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-flow: column wrap;
`;

const Image = styled.img`
	width: 80%;
`;

const HeartContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	box-sizing: border-box;
	width: 100%;
	padding-left: 15%;
`;
const UserName = styled.h3`
	margin: 0 auto;
	color: yellow;
	font-size: 26px;
	-webkit-text-stroke: 0.1px black;
`;

const User = ({ user, fontSize, heartSize }) => {
	const createHearts = lives => {
		let hearts = [];
		for (let i = 0; i < lives; i++) {
			hearts.push(
				<span
					key={i}
					role='img'
					aria-label='heart'
					style={{
						marginLeft: '2px',
						width: heartSize,
						height: heartSize,
						fontSize: heartSize ? heartSize : '20px',
					}}
				>
					&#x1F49C;
				</span>
			);
		}
		return hearts;
	};
	return (
		<Container>
			<UserName style={{ fontSize: fontSize }}>{user.name}</UserName>
			<Image src={`https://robohash.org/${user.name}?set=set4`} />
			<HeartContainer>{createHearts(user.lives)}</HeartContainer>
		</Container>
	);
};

export default User;
