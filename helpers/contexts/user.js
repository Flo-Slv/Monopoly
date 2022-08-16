import { useContext, createContext, useReducer, useCallback, useMemo } from 'react';

const UserContext = createContext();

const actionTypes = {
	setUsername: 'setUsername',
	setUser: 'setUser'
};

const reducer = (state, action) => {
	switch (action.type) {
		case actionTypes.setUsername:
			return {
				...state,
				username: action.payload.username,
			};
		case actionTypes.setUser:
			return action.payload.user;
		default:
		throw new Error('Action non supportée');
	}
};

export const UserProvider = (props) => {
	const [state, dispatch] = useReducer(reducer, {});

	const setUsername = useCallback((username) => {
		dispatch({
			type: actionTypes.setUsername,
			payload: { username },
		});
	}, []);

	const setUser = useCallback((user) => {
		dispatch({
			type: actionTypes.setUser,
			payload: { user },
		});
	}, []);

	const { idUser, username, email, urlAvatar } = state;

	const value = useMemo(() => {
		return {
			idUser,
			username,
			email,
			urlAvatar,
			setUsername,
			setUser,
		};
	}, [idUser, username, email, urlAvatar, setUsername, setUser]);

	return <UserContext.Provider value={value} {...props} />;
};

export const useUser = () => {
	const context = useContext(UserContext);
	if (!context) {
		throw new Error('useUser doit etre dans UserProvider');
	}
	return context;
};
