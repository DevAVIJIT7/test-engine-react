import { SIGN_IN, SIGN_OUT, SIGN_IN_ERROR, FETCH_USER } from '../actions/types';

const INTIAL_STATE = {
	isSignedIn: null
};

export default (state = INTIAL_STATE, action) => {
	switch (action.type) {
		case SIGN_IN:
			const user = action.payload.user;
			const token = localStorage.getItem('token');
			return {...state, isSignedIn: true, user: user, token: token};
		case SIGN_OUT:
			return {...state, isSignedIn: false, userId: null };
		case SIGN_IN_ERROR:
			return {...state, isSignedIn: true, signInErrors: action.payload.data.errors };
		case FETCH_USER:
		  return {...state, user: action.payload.data}
		default:
			return state;
	}
}