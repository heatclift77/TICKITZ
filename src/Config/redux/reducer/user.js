// STATE GLOBAL
let initialState = {
    isLogin : false,
    user : {
        id_user : '',
        email : '',
        password : '',
        firstname : '',
        lastname : '',
        telephone : '',
        username : '',
        img : '',
        role : ''
    }
}
// USER REDUCER
const userState = (state = initialState, action)=>{
    switch(action.type){
        case 'SET_STATUS' :
            return {
                ...state,
                isLogin : action.isLogin,
            }
        case 'SET_PROFIL_USER' :
            return {
                ...state,
                user : action.payload,
            }
        default : return state
    }
}

export default userState