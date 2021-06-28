import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import testReducer from './testReducer';

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  test: testReducer,
});
