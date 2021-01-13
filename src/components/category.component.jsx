import React from 'react';
import styled from 'styled-components';
import imageUrlBuilder from '@sanity/image-url';
import sanityClient from '../Client';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
	return builder.image(source);
}

const Header = styled.h2`
	font-size: 48px;
	color: yellow;
	text-align: center;
	margin: 1 auto;
	height: 60px;
	-webkit-text-stroke: 0.1px black;
`;

const Image = styled.img`
	width: 100%;
	height: 400px;
	object-fit: cover;
`;
const Container = styled.div`
	width: 100%;
	height: auto;
	box-sizing: border-box;
	padding: 0 2%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-flow: column;
	cursor: pointer;
`;
const Category = ({ category, currentQuestion }) => {
	return (
		<Container>
			<Header>{category.categoryName}</Header>
			<Image src={urlFor(category.image).url()} alt='category image' />
		</Container>
	);
};

export default Category;
