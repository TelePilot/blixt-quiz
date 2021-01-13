import sanityClient from '../../Client';

export const loadCategories = () => {
	const categories = [];
	const categoryQuery = `*[_type == "categories"]`;
	sanityClient.fetch(categoryQuery).then(category => {
		category.forEach(category => {
			if (category.questions && category.questions.length) {
				categories.push(category);
			}
		});
	});

	return categories;
};

export const newQuestion = (category, categories) => {
	var currentIndex = categories.length,
		temporaryValue,
		randomIndex;
	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		// And swap it with the current element.
		temporaryValue = categories[currentIndex];
		categories[currentIndex] = categories[randomIndex];
		categories[randomIndex] = temporaryValue;
	}

	return [category, categories[0]];
};

export const newCategory = categories => {
	var currentIndex = categories.length,
		temporaryValue,
		randomIndex;
	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		// And swap it with the current element.
		temporaryValue = categories[currentIndex];
		categories[currentIndex] = categories[randomIndex];
		categories[randomIndex] = temporaryValue;
	}

	return categories;
};

export const removeQuestion = (categories, currentQuestion) => {
	// You know the category from the currentQuestion [0] don't go through them all
	const newCategories = categories.map(category => {
		return {
			...category,
			questions: category.questions.filter(
				question => question._key !== currentQuestion[1]._key
			),
		};
	});
	return newCategories;
};
