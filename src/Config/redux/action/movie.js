import axios from 'axios'

const searchMovie = (key) => (dispatch) => {
    return new Promise((resolve, reject) => {
        dispatch({type:"SEARCH_MOVIE"});
        axios.get(`${process.env.REACT_APP_SERVER}/v1/movie/search?key=${key}`)
            .then((res) => {
                dispatch({type:"RESULT_MOVIE", payload:res.data.data});
            })
            .catch((err) => {
                dispatch({type:"RESULT_MOVIE", payload:[]});
            });
    });
};

export default searchMovie