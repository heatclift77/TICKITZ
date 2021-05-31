import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {Navbar, Footer} from '../../components/templates'
import axios from 'axios'
export default function ChangeFilm() {
    const history = useHistory
    ()
    const data_pesanan = JSON.parse(localStorage.getItem("_DATA_PESANAN"))
    const [movie, setMovie] = useState([])
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_GET_TICKET_FILM}`)
            .then(res => {
                setMovie(res.data.data)
            }
        )
    }, [])
    return (
        <div>
            <Navbar/>
            <div className="container" style={{marginTop:"8rem"}}>
                <div className="row">
                    <div className="col-12-col-md-6 my-5">
                        <div className="" style={{minWidth:"400px"}}>
                            <img src={data_pesanan.cinema_logo} className="w-100" alt="/" />
                        </div>
                        <p>{data_pesanan.alamat_cinema}</p>
                    </div>
                </div>
                <div className="row">
                    {movie.map(item=>{
                        return  <div className="col-6 col-md-4 col-lg-3 my-3">
                            <div className="rounded p-3 bg-white shadow">
                                <div className="d-flex justify-content-center rounded overflow-auto">
                                    <img src={item.image} className="w-100" alt="/" />
                                </div>
                                <p className="font-weight-bold text-center my-3">{item.title}</p>
                                <button className="mybtn mybtn-active rounded fs-08 fw-600 mt-3 w-100" onClick={()=>{
                                    localStorage.setItem("_DATA_PESANAN", JSON.stringify({...data_pesanan, movie:item.title, id_movie:item.id_movie, harga:item.price}))
                                    history.push("/app/order_page")
                                }} >Pilih</button>
                            </div>
                        </div>
                    })}
                </div>
            </div>
            <Footer/>
        </div>
    )
}

