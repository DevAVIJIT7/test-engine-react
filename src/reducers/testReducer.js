import { FETCH_TESTS } from '../actions/types';

const INTIAL_STATE = {
	tests: []
};

export default (state = INTIAL_STATE, action) => {
	switch (action.type) {
    case FETCH_TESTS:
			return {...state, tests: action.payload.tests };
		default:
			return state;
	}
}