let initialState = {
    data : {
        id_movie : "",
        id_user :  "",
        cinema : "",
        alamat_cinema :"",
        jam_tayang : "",
        movie : "",
        harga : ""
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