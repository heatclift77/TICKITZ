import React,{useState} from 'react';
import {useSelector} from 'react-redux';
import {MovieDescription, PremierLocation, ShowTimes} from '../../components/templates'

function Admin() {
    // const {data} = useSelector(state=>state.product)
    const [movie, setMovie] = useState({
        name : '',
        category : '',
        release_date : 'Set Date',
        duration : {
            hours : '0 hours',
            minutes : '0 minutes'
        },
        director : '',
        casts : '',
        synopsis : ''
    })
    function handleName(e){
        setMovie({
            ...movie,
            name : e.target.value
        })
    }
    function handleCategory(e){
        setMovie({
            ...movie,
            category : e.target.value
        })
    }
    function handleRelease_date(e){
        setMovie({
            ...movie,
            release_date : e.target.value
        })
    }
    function handleDirector(e){
        setMovie({
            ...movie,
            director : e.target.value
        })
    }
    function handleCasts(e){
        setMovie({
            ...movie,
            casts : e.target.value
        })
    }
    function handleSynopsis(e){
        setMovie({
            ...movie,
            synopsis : e.target.value
        })
    }
    function handleHours(e){
        setMovie({
            ...movie,
            duraion : {
                ...movie.duration,
                hours : e.target.value
            }
        })
    }
    function handleMinutes(e){
        setMovie({
            ...movie,
            duraion : {
                ...movie.duration,
                minutes : e.target.value
            }
        })
    }
    function getImg(e){
        console.log(e.target);
    }
    return (
        <div className='mybg-second'>
            <div className='container py-5'>
                <div className='row'>
                    <div className="col-12 col-lg-7">
                        <MovieDescription
                        handleName = {handleName}
                        handleCategory = {handleCategory}
                        handleRelease_date = {handleRelease_date}
                        handleHours = {handleHours} 
                        handleMinutes = {handleMinutes}
                        dateValue = {movie.release_date}
                        handleDirector = {handleDirector}
                        handleCasts = {handleCasts}
                        handleSynopsis= {handleSynopsis}
                        getImg = {getImg}
                        />
                    </div>
                    <div className='col-12 col-lg-5'>
                        <PremierLocation />
                        <ShowTimes  />
                    </div>
                    <div className='col-12 col-lg-5 my-5'>
                        <button type='submit' className='mybtn mybtn-active myrounded-1 w-100 py-3' onClick={(e)=>{
                            e.preventDefault()
                            const form = new FormData()
                            form.append('movie', movie.name)
                            form.append('movie', movie.name)
                            form.append('movie', movie.name)
                            form.append('movie', movie.name)
                            form.append('movie', movie.name)
                            form.append('movie', movie.name)
                        }}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admin
