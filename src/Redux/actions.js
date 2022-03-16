// thunk call to fetch movie list
import {actionType} from './actionTypes'

export const getMovieData = (data) => ({
    type:actionType.GET_MOVIES_DATA,
    payload:data
});

// action object for filter  feature

export const filterByGenre = () => ({
    type:actionType.FILTER_BY_GENRE,
});
export const getMovieDataLoading =() =>{
    type: actionType.IS_LOADING
}
export const getMovieDataError =() =>{
    type: actionType.IS_ERROR
}
