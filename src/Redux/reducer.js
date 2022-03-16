import {GET_MOVIES_DATA,
    FILTER_BY_GENRE,
    IS_LOADING,
    IS_ERROR} from './actionTypes'

const initState = {
    data:[],
    filterData:[],
    isLoading:false,
    isError:false
}

export const Reducer = (state = initState, {type, payload})=>{
    // add the switch statement for different actions
    switch(type){
        case GET_MOVIES_DATA:
            return{...state, data:payload};
        case FILTER_BY_GENRE:
            return{...state, data:payload.filterData.filter((v) =>{
                return {...state, ...payload.filterData} 
            })}
        case IS_LOADING:
            return{...state, data:payload=true}
        case IS_ERROR:
            return{...state, data:payload=false}
        default:
            return state;
    }

}