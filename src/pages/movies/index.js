import React from 'react'
import {Navbar, Footer} from '../../components/templates'
import {useSelector} from 'react-redux'
export default function Movies() {
    const {data} = useSelector(state=>state.movie)
    return (
        <div>
            <Navbar/>
            <div className="container" style={{paddingTop:"10rem"}}>
                <h2 className="font-weight-bold">Semua Film</h2>
                <div className="row my-4">
                    {data.map(movie=>{
                        return <div className="col-6 col-md-3 col-xl-2">
                        <div className="p-3 rounded shadow">
                            <div className="d-flex justify-content-center rounded overflow-hidden">
                                <img src={movie.image} className="w-100 align-self-center" alt="film" />
                            </div>
                            <p className="font-weight-bold text-center my-3">{movie.title}</p>
                            <button className="button-details w-100" style={{textAlign:"center !important"}}>details</button>
                        </div>
                    </div>
                    })}
                </div>
            </div>
            <Footer/>
        </div>
    )
}

