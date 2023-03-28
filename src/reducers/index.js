import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import favoriteReducer from './favoriteReducer';

//export default movieReducer;

const reducers = combineReducers({
    movieState: movieReducer,
    favoriteState: favoriteReducer,
});

export default reducers;
