export const removeUser = (users, userToRemove) => {
	return users.filter(user => user.id !== userToRemove.id);
};

export const selectCurrentUser = (users, index) => {
	return users[index];
};

export const increaseIndex = (users, index) => {
	if (index < users.length - 1) {
		index = index + 1;
	} else {
		index = 0;
	}

	return index;
};

export const removeUserLife = (users, userLifeToRemove) => {
	const currentUser = users.find(user => user.id === userLifeToRemove.id);
	if (currentUser.lives === 0) {
		return;
	}
	return users.map(user =>
		user.id === userLifeToRemove.id
			? {
					...user,
					lives: user.lives - 1,
			  }
			: user
	);
};
