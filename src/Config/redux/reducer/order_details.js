let initialState = {
    data : {
        dateNtime : '',
        movie_title : '',
        cinema_name : '',
        ticket_count   : '',
        total_price    : ''
    }
}

const Order_Details = (state = initialState, action) => {
    switch(action.type){
        case 'SET_ORDER_DETAILS' : return {
            data : action.payload
        }
        default : return state
    }
}
export default Order_Details