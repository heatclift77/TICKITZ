import { React, useState, useEffect } from 'react'
import { CardMovie } from '../../molekuls'
import { MovieInfo } from '../../templates'
import Modal from 'react-modal'
import axios from 'axios'

function UpComing() {
    const [data, setData] = useState([])
    const [state, setState] = useState({
        month: {
            jan: false,
            feb: false,
            mar: false,
            apr: false,
            mei: false,
            jun: false,
            jul: false,
            agu: false,
            sep: false,
            okt: false,
            nov: false,
            des: false
        },
        toggleModal: false,
    })
    const [movieInfo, setMovieInfo] = useState({
        title: "",
        synopsis: "",
        genre: "",
        releaseDate: "",
        directedBy: "",
        duration: "",
        casts: "",
        img: ""
    })
    const date = new Date()
    const month = date.getMonth()
    useEffect(() => {
        if (month === 1) {
            setState({ ...state, month: { ...state, jan: true } })
        } else if (month === 2) {
            setState({ ...state, month: { ...state, feb: true } })
        }
        else if (month === 3) {
            setState({ ...state, month: { ...state, mar: true } })
        }
        else if (month === 4) {
            setState({ ...state, month: { ...state, apr: true } })
        }
        else if (month === 5) {
            setState({ ...state, month: { ...state, mei: true } })
        }
        else if (month === 6) {
            setState({ ...state, month: { ...state, jun: true } })
        }
        else if (month === 7) {
            setState({ ...state, month: { ...state, jul: true } })
        }
        else if (month === 8) {
            setState({ ...state, month: { ...state, agu: true } })
        }
        else if (month === 9) {
            setState({ ...state, month: { ...state, sep: true } })
        }
        else if (month === 10) {
            setState({ ...state, month: { ...state, okt: true } })
        }
        else if (month === 11) {
            setState({ ...state, month: { ...state, nov: true } })
        } else {
            setState({ ...state, month: { ...state, des: true } })
        }
    }, [])
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_GET_TICKET_FILM}`)
            .then(res => {
                setData(res.data.data)
            })
            .catch(err=>{
                console.log(err.response);
            })
    }, [])
    console.log("ini", data);
    return (
        <div className="my-5">
            <div class="col-12 d-flex justify-content-between">
                <h5 class="font-weight-bold">UpComing Movies</h5>
                <a href="#" class="color-primary">view all</a>
            </div>
            <div class="row overflow-auto my-3">
                <div class="col-lg-12 d-sm-flex d-md-flex d-lg-block">
                    <button className={state.month.jan === true ? "mybtn myrounded-1 mybtn-active mx-3 mt-lg-3" : "mybtn myrounded-1 mx-3 mt-lg-3"} onClick={() => {
                        setState({
                            ...state, month: {
                                jan: true,
                                feb: false,
                                mar: false,
                                apr: false,
                                mei: false,
                                jun: false,
                                jul: false,
                                agu: false,
                                sep: false,
                                okt: false,
                                nov: false,
                                des: false
                            }
                        })
                    }} >Januari</button>
                    <button className={state.month.feb === true ? "mybtn myrounded-1 mybtn-active mx-3 mt-lg-3" : "mybtn myrounded-1 mx-3 mt-lg-3"} onClick={() => {
                        setState({
                            ...state, month: {
                                jan: false,
                                feb: true,
                                mar: false,
                                apr: false,
                                mei: false,
                                jun: false,
                                jul: false,
                                agu: false,
                                sep: false,
                                okt: false,
                                nov: false,
                                des: false
                            }
                        })
                    }} >februari</button>
                    <button className={state.month.mar === true ? "mybtn myrounded-1 mybtn-active mx-3 mt-lg-3" : "mybtn myrounded-1 mx-3 mt-lg-3"} onClick={() => {
                        setState({
                            ...state, month: {
                                jan: false,
                                feb: false,
                                mar: true,
                                apr: false,
                                mei: false,
                                jun: false,
                                jul: false,
                                agu: false,
                                sep: false,
                                okt: false,
                                nov: false,
                                des: false
                            }
                        })
                    }} >maret</button>
                    <button className={state.month.apr === true ? "mybtn myrounded-1 mybtn-active mx-3 mt-lg-3" : "mybtn myrounded-1 mx-3 mt-lg-3"} onClick={() => {
                        setState({
                            ...state, month: {
                                jan: false,
                                feb: false,
                                mar: false,
                                apr: true,
                                mei: false,
                                jun: false,
                                jul: false,
                                agu: false,
                                sep: false,
                                okt: false,
                                nov: false,
                                des: false
                            }
                        })
                    }} >april</button>
                    <button className={state.month.mei === true ? "mybtn myrounded-1 mybtn-active mx-3 mt-lg-3" : "mybtn myrounded-1 mx-3 mt-lg-3"} onClick={() => {
                        setState({
                            ...state, month: {
                                jan: false,
                                feb: false,
                                mar: false,
                                apr: false,
                                mei: true,
                                jun: false,
                                jul: false,
                                agu: false,
                                sep: false,
                                okt: false,
                                nov: false,
                                des: false
                            }
                        })
                    }} >mei</button>
                    <button className={state.month.jun === true ? "mybtn myrounded-1 mybtn-active mx-3 mt-lg-3" : "mybtn myrounded-1 mx-3 mt-lg-3"} onClick={() => {
                        setState({
                            ...state, month: {
                                jan: false,
                                feb: false,
                                mar: false,
                                apr: false,
                                mei: false,
                                jun: true,
                                jul: false,
                                agu: false,
                                sep: false,
                                okt: false,
                                nov: false,
                                des: false
                            }
                        })
                    }} >juni</button>
                    <button className={state.month.jul === true ? "mybtn myrounded-1 mybtn-active mx-3 mt-lg-3" : "mybtn myrounded-1 mx-3 mt-lg-3"} onClick={() => {
                        setState({
                            ...state, month: {
                                jan: false,
                                feb: false,
                                mar: false,
                                apr: false,
                                mei: false,
                                jun: false,
                                jul: true,
                                agu: false,
                                sep: false,
                                okt: false,
                                nov: false,
                                des: false
                            }
                        })
                    }} >juli</button>
                    <button className={state.month.agu === true ? "mybtn myrounded-1 mybtn-active mx-3 mt-lg-3" : "mybtn myrounded-1 mx-3 mt-lg-3"} onClick={() => {
                        setState({
                            ...state, month: {
                                jan: false,
                                feb: false,
                                mar: false,
                                apr: false,
                                mei: false,
                                jun: false,
                                jul: false,
                                agu: true,
                                sep: false,
                                okt: false,
                                nov: false,
                                des: false
                            }
                        })
                    }} >agustus</button>
                    <button className={state.month.sep === true ? "mybtn myrounded-1 mybtn-active mx-3 mt-lg-3" : "mybtn myrounded-1 mx-3 mt-lg-3"} onClick={() => {
                        setState({
                            ...state, month: {
                                jan: false,
                                feb: false,
                                mar: false,
                                apr: false,
                                mei: false,
                                jun: false,
                                jul: false,
                                agu: false,
                                sep: true,
                                okt: false,
                                nov: false,
                                des: false
                            }
                        })
                    }} >september</button>
                    <button className={state.month.okt === true ? "mybtn myrounded-1 mybtn-active mx-3 mt-lg-3" : "mybtn myrounded-1 mx-3 mt-lg-3"} onClick={() => {
                        setState({
                            ...state, month: {
                                jan: false,
                                feb: false,
                                mar: false,
                                apr: false,
                                mei: false,
                                jun: false,
                                jul: false,
                                agu: false,
                                sep: false,
                                okt: true,
                                nov: false,
                                des: false
                            }
                        })
                    }} >oktober</button>
                    <button className={state.month.nov === true ? "mybtn myrounded-1 mybtn-active mx-3 mt-lg-3" : "mybtn myrounded-1 mx-3 mt-lg-3"} onClick={() => {
                        setState({
                            ...state, month: {
                                jan: false,
                                feb: false,
                                mar: false,
                                apr: false,
                                mei: false,
                                jun: false,
                                jul: false,
                                agu: false,
                                sep: false,
                                okt: false,
                                nov: true,
                                des: false
                            }
                        })
                    }} >november</button>
                    <button className={state.month.des === true ? "mybtn myrounded-1 mybtn-active mx-3 mt-lg-3" : "mybtn myrounded-1 mx-3 mt-lg-3"} onClick={() => {
                        setState({
                            ...state, month: {
                                jan: false,
                                feb: false,
                                mar: false,
                                apr: false,
                                mei: false,
                                jun: false,
                                jul: false,
                                agu: false,
                                sep: false,
                                okt: false,
                                nov: false,
                                des: true
                            }
                        })
                    }} >desember</button>
                </div>
            </div>
            <div className="d-flex overflow-auto py-5">
                {data.map(mov => {
                    if (mov.status == '0') {
                        return <CardMovie title={mov.title} genre={mov.genre} img={mov.image} id_movie={mov.id_movie} onClick={() => {
                            setState({
                                ...state, toggleModal: true, movieInfo: {
                                }
                            })
                        }} />
                    } else {
                        return '';
                    }
                })}
            </div>
            <Modal
                isOpen={state.toggleModal}
                className="modalPositionAndSizeConfig"
                overlayClassName="modalOverLayConfig"
                closeTimeoutMS={400}
                ariaHideApp={false}
            >
            </Modal>
        </div>
    )
}

export default UpComing
