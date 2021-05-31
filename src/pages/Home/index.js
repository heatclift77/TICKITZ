import { React, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Navbar, Footer } from '../../components/templates'
import { CardMovie2 } from '../../components/molekuls'
import Modal from 'react-modal'
import axios from 'axios'
// ----- image -----
import hero1 from '../../asets/spider_man.png'
import hero2 from '../../asets/lion.png'
import hero3 from '../../asets/woman.png'
// -----------------

export default function Home() {
    const history = useHistory()
    const [data, setData] = useState([])
    const [movieSelected, setMovieSelected] = useState({})
    const [state, setState] = useState({
        toggleModal: false
    })
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_GET_TICKET_FILM}`)
            .then(res => {
                setData(res.data.data)
            }
        )
    }, [])
    return (
        <>
            <Navbar />
            <div className="container" style={{paddingTop:"8rem"}}>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 text-sm-center text-start d-flex align-self-center">
                        <div>
                            <p class="color-third m-0 text-sm-left text-md-center text-lg-left">Nearest Cinema, Newest Movie,</p>
                            <h1 class="color-primary font-weight-bold">Find out now!</h1>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center mt-4 py-4">
                        <div className="d-flex justify-content-center">
                            <div class="mt-4">
                                <img src={hero1} className="mt-5 mr-4 shadow" alt="/" />
                            </div>
                            <div class=" mt-2">
                                <img src={hero2} className="mt-4 mr-4 shadow" alt="/" />
                            </div>
                            <div class="">
                                <img src={hero3} className="shadow" alt="/" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-7 nowShowingHeight">
                    <div class="col-12 d-flex justify-content-between">
                        <h5 class="font-weight-bold">Now Showing</h5>
                        <span class="color-primary">view all</span>
                    </div>
                    <div className="d-flex overflow-auto py-5">
                        {data.map(mov => {
                            return <CardMovie2 title={mov.title} genre={mov.genre} img={mov.image} id_movie={mov.id_movie} openModal={() => {
                                state.toggleModal ? setState({ ...state, toggleModal: false }) : setState({ ...state, toggleModal: true })
                                setMovieSelected(mov)
                            }} onClick={
                                () => {
                                    history.push(`/app/ListTayang/${mov.id_movie}`)
                                }
                            } />
                        })}
                    </div>
                </div>
                <div class="col-12 my-5">
                    <h5 class="font-weight-bold">Choose genre</h5>
                </div>
            </div>
            <Modal
                isOpen={state.toggleModal}
                className="modalSize"
                overlayClassName="overlayConfig"
                closeTimeoutMS={400}
                ariaHideApp={false}
            >
                <div className="row overflow-auto">
                    <div className="col-12 col-lg-4">
                        <div className="border rounded p-2">
                            <img src={movieSelected.image} className="rounded w-100" alt="/" />
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="row">
                            <div className="col-12 mb-3">
                                <p className="m-0 font-weight-bold color-third">Judul :</p>
                                <h2 className="font-weight-bold">{movieSelected.title}</h2>
                            </div>
                            <div className="col-6 mb-3">
                                <p className="m-0 font-weight-bold color-third">Tanggal rilis :</p>
                                <p className="font-weight-bold">{movieSelected.release_date}</p>
                            </div>
                            <div className="col-6 mb-3">
                                <p className="m-0 font-weight-bold color-third">Genre :</p>
                                <p className="font-weight-bold">{movieSelected.genre}</p>
                            </div>
                            <div className="col-6 mb-3">
                                <p className="m-0 font-weight-bold color-third">Durasi :</p>
                                <p className="font-weight-bold">{movieSelected.duration}</p>
                            </div>
                            <div className="col-6 mb-3">
                                <p className="m-0 font-weight-bold color-third">Sutradara :</p>
                                <p className="font-weight-bold">{movieSelected.directed_by}</p>
                            </div>
                            <div className="col-6 mb-3">
                                <p className="m-0 font-weight-bold color-third">Pemeran :</p>
                                <p className="font-weight-bold">{movieSelected.casts}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 my-3">
                        <p className="m-0 font-weight-bold color-third">sinopsis :</p>
                        <p className="font-weight-bold">{movieSelected.synopsis}</p>
                    </div>
                </div>
                <div className="d-flex justify-content-end">
                    <button className="btn btn-danger" onClick={()=>{setState({...state, toggleModal:false})}} >Close</button>
                </div>
            </Modal>
            <Footer />
        </>
    )
}

