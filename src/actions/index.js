import { withoutToken, withToken } from '../apis/base';
import history from '../history';
import {
  SIGN_IN, SIGN_OUT, SIGN_IN_ERROR, FETCH_USER, FETCH_TESTS,
} from './types';

export const signIn = (formValues) => async (dispatch) => {
  try {
    const response = await withoutToken.post('/session/login', { ...formValues });

    dispatch({
      type: SIGN_IN,
      payload: response.data,
    });

    const { user } = response.data;
    const { tokens } = user;
    localStorage.setItem('userId', user._id);
    localStorage.setItem('token', tokens[tokens.length - 1].token);

    history.push('/tests');
  } catch (error) {
    dispatch({
      type: SIGN_IN_ERROR,
      payload: error.response,
    });
  }
};

export const signOut = () => ({
  type: SIGN_OUT,
});

export const fetchUser = () => async (dispatch) => {
  const id = localStorage.getItem('userId');
  const response = await withToken.get(`/users/${id}`);

  dispatch({
    type: FETCH_USER,
    payload: response.data,
  });
};

// export const createStream = (formValues) => {
// 	return async (dispatch, getState) => {
// 		const { userId } = getState().auth;
// 		const response = await streams.post('/streams', {...formValues, userId})

// 		dispatch({
// 			type: CREATE_STREAM,
// 			payload: response.data
// 		})

// 		history.push('/')
// 	}
// }

export const fetchTests = () => async (dispatch) => {
  const response = await withToken.get('/tests');

  dispatch({
    type: FETCH_TESTS,
    payload: response.data,
  });
};

// export const fetchStream = (id) => {
// 	return async (dispatch) => {
// 		const response = await streams.get(`/streams/${id}`)

// 		dispatch({
// 			type: FETCH_STREAM,
// 			payload: response.data
// 		})
// 	}
// }

// export const editStream = (id, formValues) => {
// 	return async (dispatch) => {
// 		const response = await streams.patch(`/streams/${id}`, formValues)

// 		dispatch({
// 			type: EDIT_STREAM,
// 			payload: response.data
// 		})

// 		history.push('/')
// 	}
// }

// export const deleteStream = (id) => {
// 	return async (dispatch) => {
// 		await streams.delete(`/streams/${id}`)

// 		dispatch({
// 			type: DELETE_STREAM,
// 			payload: id
// 		})
// 	}
// }
