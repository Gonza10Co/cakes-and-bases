import { combineReducers } from 'redux';
import redLoading from './loading';
import redData from './data';
import redPage from './paginate';
import redColors from './colors';

const reducer = combineReducers({
	redLoading,
	redData,
	redPage,
	redColors,
});

export default reducer;
