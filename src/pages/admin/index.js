import React, {useState, useEffect} from 'react';
// import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom'
import {Navbar, Footer} from '../../components/templates'
import axios from 'axios'

function Admin() {
    const history = useHistory()
    const [movie, setMovie] = useState([])
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_GET_TICKET_FILM}`)
            .then(res => {
                setMovie(res.data.data)
            }
        )
    }, [])
    return (
        <>
            <Navbar />
            <div className="container" style={{marginTop:"8rem"}}>
                <div className="row" style={{minHeight:"600px"}}>
                    <div className="col-2 my-3">
                        <div className="bg-white w-100 rounded p-3 d-flex justify-content-center shadow" style={{minHeight:"300px"}}>
                            <div className="align-self-center">
                                <span className="color-primary font-weight-bold hover-reduce-opacity" style={{cursor:"pointer"}}>Add Movie</span>
                            </div>
                        </div>
                    </div>
                    {movie.map(mov=>{
                        return <div className="col-2 my-3">
                        <div className="bg-white w-100 rounded p-2 shadow">
                            <div className="rounded overflow-hidden">
                                <img src={mov.image} className="w-100" alt="/" />
                            </div>
                            <h4 className="m-0 my-3 font-weight-bold text-center">{mov.title}</h4>
                            <button class="mybtn rounded fs-08 fw-600 mt-lg-3 w-100" onClick={()=>{history.push(`/app/admin/movieDetails/${mov.id_movie}`)}} >atur</button>
                        </div>
                    </div>
                    })}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Admin
