let initialstate = {
    loading : false,
    error : false,
    data : {
        movie : {
            name : '-',
            category : '-',
            release_date : '-',
            duration : '0 hours 0 minutes',
            img : '-',
            director : '-',
            casts : '-',
            synopsis : '-'
        },
        cinema : {
            name : '-',

        },
        show_times : {
            date : '-',
            time : '-'
        }
    }
}

const Product = (state = initialstate, action)=>{
    switch(action.type){
        case 'SET_MOVIE_NAME' : 
            return state = {
            ...state,
            data : {
                ...state.data,
                movie : {
                    ...state.data.movie,
                    name : action.payload
                }
            }
        }
        case 'SET_MOVIE_CATEGORY' : 
        return state = {
        ...state,
        data : {
            ...state.data,
            movie : {
                ...state.data.movie,
                category : action.payload
                }
            }
        }
        case 'SET_MOVIE_RELEASE_DATE' : 
        return state = {
        ...state,
        data : {
            ...state.data,
            movie : {
                ...state.data.movie,
                release_date : action.payload
                }
            }
        }
        case 'SET_MOVIE_DURATION' : 
        return state = {
        ...state,
        data : {
            ...state.data,
            movie : {
                ...state.data.movie,
                duration : action.payload
                }
            }
        }
        case 'SET_MOVIE_DIRECTOR' : 
        return state = {
        ...state,
        data : {
            ...state.data,
            movie : {
                ...state.data.movie,
                director : action.payload
                }
            }
        }
        case 'SET_MOVIE_CASTS' : 
        return state = {
        ...state,
        data : {
            ...state.data,
            movie : {
                ...state.data.movie,
                cast : action.payload
                }
            }
        }
        case 'SET_MOVIE_SYNOPSIS' : 
        return state = {
        ...state,
        data : {
            ...state.data,
            movie : {
                ...state.data.movie,
                synopsis : action.payload
                }
            }
        }
        case 'SET_CINEMA' : 
            return state = {
            ...state,
            data : {
                ...state.data,
                cinema : action.payload
            }
        }
        case 'SET_SHOW_TIMES' : 
            return state = {
            ...state,
            data : {
                ...state.data,
                show_times : action.payload
            }
        }
        default : return state
    }
}

export default Product