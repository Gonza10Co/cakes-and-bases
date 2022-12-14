import axios from 'axios';
import {
	SET_LOADING,
	SET_PAGE,
	GET_DATA,
	GET_FILTERED_DATA,
	GET_COLORS,
} from './types';

export const setLoading = payload => ({ type: SET_LOADING, payload });

export const setPage = page => dispatch =>
	dispatch({ type: SET_PAGE, payload: page });

// Get Products from backend
export const getData = () => {
	return async dispatch => {
		dispatch(setLoading(true));
		try {
			const response = await axios.get('/products');
			if (response.status === 200)
				dispatch({ type: GET_DATA, payload: response.data });
		} catch {
			dispatch({ type: GET_DATA, payload: null });
		}
		dispatch(setLoading(false));
	};
};

// Get filtered Products from backend
export const getFilteredData = query => {
	return async dispatch => {
		try {
			dispatch(setLoading(true));
			const response = await axios.get(`/products/${query}`);
			dispatch({ type: GET_FILTERED_DATA, payload: response.data });
			setPage(1);
		} catch (error) {
			alert('No data found');
			getData();
		}
		dispatch(setLoading(false));
	};
};

// Get Colors from backend
export const getColors = () => {
	return async dispatch => {
		dispatch(setLoading(true));
		const response = await axios.get('/colors');
		dispatch({ type: GET_COLORS, payload: response.data });
		dispatch(setLoading(false));
	};
};
