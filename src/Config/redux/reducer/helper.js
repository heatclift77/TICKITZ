let initialState = {
    data : {
        title : '',
        cinema_img : '',
        show_time : '',
        price   : '',
        seat    : ''
    }
}

const Cinema = (state = initialState, action) => {
    switch(action.type){
        case 'SET_DATA_TICKET' : return {
            data : action.payload
        }
        default : return state
    }
}
export default Cinema