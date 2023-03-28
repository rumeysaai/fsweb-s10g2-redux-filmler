import { TOGGLE_FAVORITES, ADD_FAVORITE, REMOVE_FAVORITE } from '../actions/favoritesActions.js';

const initialState = {
    favorites: [],
    displayFavorites: true,
}

const reducer=(state=initialState, action)=>{
    switch(action.type){
        case ADD_FAVORITE:
            const newFav = {
                title: action.payload.title,
                id: action.payload.id,
            }
            return {
                ...state,
                favorites: [...state.favorites, newFav],
            }
        case TOGGLE_FAVORITES:
            return {
                ...state,
                displayFavorites: !state.displayFavorites
            }
        case REMOVE_FAVORITE:
            return{
                ...state,
                favorites: state.favorites.filter(
                    (movie) => movie.id !== action.payload
                )
            }
        default:
            return state;

    }
}

export default reducer;