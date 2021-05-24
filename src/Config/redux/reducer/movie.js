let initialState = {
    loading : false,
    data : []
}
const movie = (state = initialState, action)=>{
    switch(action.type){
        case 'SEARCH_MOVIE' :
            return {
                ...state,
                loading : true,
            }
        case 'RESULT_MOVIE' :
            return {
                loading : false,
                data : action.payload
            }
        default : return state
    }
}

export default movie