import React, {useEffect, useState} from 'react'
import {Navbar, Footer} from '../../components/templates'
import {useParams} from 'react-router-dom'
import axios from 'axios'
export default function EditMovie() {
    const {id} = useParams()
    const [movie, setMovie] = useState([])
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER}/v1/movie/details?id=${id}`)
            .then(res => {
                setMovie(res.data.data[0])
            })
            .catch(err => {
                if (err.message == 'Request failed with status code 404') {
                }
            })
    }, [])
    console.log(movie);
    return (
        <>
            <Navbar />
            <div className="container" style={{marginTop:"8rem"}}>
                <h3>Detail Informasi</h3>
                <div className="row bg-white rounded">
                    <div className="col-3">
                        <div className="rounded overflow-hidden">
                            <img src={movie.image} className="w-100" />
                        </div>
                    </div>
                    <div className="col-8">
                        <div>
                            <label style={{display:"block"}}>Judul</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label>Genre</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label>Pemeran</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label>Pemeran</label>
                            <input type="text" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
