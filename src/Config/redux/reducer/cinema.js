let initialState = {
    loading : '',
    error : '',
    data : [],
}

const Cinema = (state = initialState, action) => {
    switch(action.type){
        case 'SET_STATE' : return {
            ...state,
            data : action.payload
        }
        default : return state
    }
}
export default Cinema