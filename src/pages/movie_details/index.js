import { React, useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Navbar, Footer, MovieInfo } from '../../components/templates'
import axios from 'axios'
import swal from "sweetalert"
function MovieDetails() {
    // for pagination
    const limit = 3
    // 
    const { user } = useSelector(state => state.user)
    const history = useHistory()
    const [movie, setMovie] = useState({})
    const [cinema, setCinema] = useState({
        loading : false,
        data : [],
        isNotFound : false
    })
    const { code } = useParams();
    const [cinemaSelected, setCinemaSelected] = useState("")
    const [jamTayang, setJamTayang] = useState("")
    const [page, setPage] = useState([])
    const [paginationSelected, setPaginationSelected] = useState(1)
    const [dropdown] = useState({
        value: "",
        list: ["ALL","JAKARTA", "SEMARANG", "SURABAYA", "BALI"]
    })
    useEffect(() => {
        setCinema({...cinema, loading:true})
        axios.get(`${process.env.REACT_APP_SERVER}/v1/cinema?limit=${limit}&offset=0`)
            .then(response => {
                if(response.data.data.length === 0){
                    setCinema({...cinema, isNotFound:true})
                }else{
                    setCinema({loading:false, data:response.data.data, isNotFound:false})
                }
                setPage(response.data.page);
            })
            .catch(err => {
                console.log(err.response);
            })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [code])
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER}/v1/movie/details?id=${code}`)
            .then(res => {
                setMovie(res.data.data[0])
            })
            .catch(err => {
                if (err.message === 'Request failed with status code 404') {
                }
            })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <>
            <Navbar />
            <div className="container mt-7">
                <MovieInfo
                    image={movie.image}
                    title={movie.title}
                    genre={movie.genre}
                    price={movie.price}
                    release_date={movie.release_date}
                    directed_by={movie.directed_by}
                    duration={movie.duration}
                    casts={movie.casts}
                    synopsis={movie.synopsis}
                />
                <div className="row my-5">
                    <div className="col-12 text-center">
                        <h5 className='fw-600'>Tonton di Bioskop kesayangan anda</h5>
                        <div className="row" style={{ marginTop: "5rem" }}>
                            <div className="col-12 col-md-10 col-lg-8">
                                <div className="">
                                    <p className="text-left font-weight-bold">temukan di kota anda :</p>
                                </div>
                                <div className="d-flex justify-content-start">
                                    <select className="w-50 border rounded py-2 px-3 mr-auto" style={{outline:"none"}} onChange={(e)=> {
                                        setCinema({...cinema, loading:true})
                                        axios.get(`${process.env.REACT_APP_SERVER}/v1/cinema/sort?kota=${e.target.value}&limit=${limit}&offset=0`)
                                        .then(response => {
                                            if(response.data.data.length === 0){
                                                setCinema({...cinema, isNotFound:true})
                                            }else{
                                                setCinema({loading:false, data:response.data.data, isNotFound:false})
                                            }
                                            setPage(response.data.page);
                                        })
                                    }} >
                                        {dropdown.list.map(kota=>{
                                            return <option>{kota}</option>
                                        })}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* card */}
                <div className="row">
                    {cinema.data.map((item, indexCard) => {
                        return <div className="col-12 col-md-6 col-lg-4">
                            <div className="row myrounded-2 my-3 py-4 mx-1 border shadow">
                                <div className="col-12">
                                    <div>
                                        <div className="row border-bottom">
                                            <div className="col-12">
                                                <div className="row">
                                                    <div className="col-12 col-md-12 col-lg-6 mt-lg-3 my-auto">
                                                        <div className="align-self-center hide-on-sm hide-on-md">
                                                            <img src={item.img} className='w-100' alt="cinema" />
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-md-12 col-lg-6">
                                                        <h2 className="m-0 text-center text-lg-left">{item.cinema}</h2>
                                                        <p className="mygray-color text-center text-lg-left" style={{ fontSize: "14px" }}>{item.alamat}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row my-3">
                                            {item.list_tayang.split(",").map((jam) => {
                                                return <div className="col-4 col-lg-4 col-xl-4" onClick={() => {
                                                    setCinemaSelected(indexCard)
                                                    setJamTayang(jam)
                                                }
                                                } >
                                                    <p className={cinemaSelected === indexCard && jamTayang === jam ? "mybg-primary text-white text-center py-1 rounded" : "mygray-color text-center hover-color-primary py-1"} style={{ fontSize: "14px" }}>{jam}</p>
                                                </div>
                                            })}
                                        </div>
                                        <div className="row mt-5">
                                            <div className="col-10 col-md-12 col-lg-12 mx-auto">
                                                <div className="row">
                                                    <div className="col-12 col-md-12 col-lg-12 col-xl-6 mb-3 ml-auto">
                                                        <button className="mybtn mybtn-active w-100 myrounded-1" onClick={(e) => {
                                                            if (cinemaSelected === indexCard) {
                                                                const data = {
                                                                    id_movie: code,
                                                                    id_user: user.id_user,
                                                                    id_cinema: item.id_cinema,
                                                                    cinema: item.cinema,
                                                                    alamat_cinema: item.alamat,
                                                                    jam_tayang: jamTayang,
                                                                    movie: movie.title,
                                                                    harga: movie.price,
                                                                    kursi: item.kursi,
                                                                    cinema_logo: item.img
                                                                }
                                                                localStorage.setItem("_DATA_PESANAN", JSON.stringify(data))
                                                                history.push(`/app/order_page`)
                                                            } else {
                                                                swal("Oops", "silahkan pilih jam tayang nya", "error")
                                                            }
                                                        }}>book now</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })}
                    <div className="col-12 my-5">
                        <div className="d-flex">
                            {(page.map(page=>{
                                return <button className={paginationSelected === page.number ? "pagination pagination-active mx-2" : "pagination mx-2"} onClick={()=>{
                                    setCinema({...cinema, loading:true})
                                    axios.get(page.link)
                                        .then(res => {
                                            setPaginationSelected(page.number)
                                            setCinema({...cinema, loading:false, data:res.data.data})
                                            setPage(res.data.page);
                                        })
                                }} >{page.number}</button>
                            }))}
                        </div>
                    </div>
                    <div className={cinema.isNotFound ? "col-12" : "hide"} style={{minHeight:"400px"}}>
                        <h2 className="text-center my-5">
                            Maaf mungkin di Kota anda saat ini belum ada <strong className="text-danger">404</strong>
                        </h2>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default MovieDetails
