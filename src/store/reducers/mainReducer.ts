import { combineReducers } from 'redux';
import storiesReducer from './storiesReducer';
import jobsReducer from './jobsReducer';

export default combineReducers({
	stories: storiesReducer,
	jobs: jobsReducer,
});