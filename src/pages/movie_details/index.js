import { React, useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { Navbar, Footer, MovieInfo } from '../../components/templates'
import { Dropdown, InputDate } from '../../components/organism'
import axios from 'axios'

function MovieDetails() {
    const dispatch = useDispatch()
    const [data, setData] = useState({
        cardIndex : 0,
        timeValue : ''
    })
    const [buttonControl, setButtonControl] = useState({
        style : {
            active : 'color-primary border-0 bg-transparent',
            inActive : 'bg-transparent border-0' 
        },
        object : null,
        Card : null
    })
    const history = useHistory()
    const [movie, setMovie] = useState({})
    const [listTayang, setListTayang] = useState([])
    const { code } = useParams();
    const [dateValue, setDateValue] = useState('Set Date')
    useEffect(() => {
        axios.get(`http://localhost:5000/v1/movie/details?id=${code}`)
            .then(res => {
                setMovie(res.data.data[0])
            })
            .catch(err => {
                if (err.message == 'Request failed with status code 404') {
                    history.push('/home')
                }
            })
        axios.get(`http://localhost:5000/v1/cinema_list?code_ticket=` + code)
            .then(response => {
                setListTayang(response.data.data)
            })
    }, [code])
    return (
        <>
            <Navbar />
            <div className="container mt-7">
                <MovieInfo
                    title={movie.title}
                    synopsis={movie.synopsis}
                    genre={movie.genre}
                    releaseDate={movie.release_date}
                    directedBy={movie.directed_by}
                    duration={movie.duration}
                    casts={movie.casts}
                    img={movie.image}
                />
                <div className="row my-5">
                    <div className="col-6 mx-auto text-center">
                        <h5 className='fw-600'>ShowTimes and Tickets</h5>
                        <div className="d-flex justify-content-between my-5">
                            <InputDate
                            value={dateValue}
                            onChange={(e)=>{
                                setDateValue(e.target.value)
                                axios.get(`http://localhost:5000/v1/cinema_list/specific?date=${e.target.value}&code_ticket=${code}`)
                                .then(response => {
                                    setListTayang(response.data.data)
                                })
                                .catch(err => {
                                    if(err.message == 'Request failed with status code 404'){
                                        setListTayang([])
                                    }
                                })
                            }}
                            />
                            <Dropdown />
                        </div>
                    </div>
                </div>
                {/* card */}
                <div className="row">
                    {listTayang.map((list, Cardindex) => {
                        return <div className="col-4">
                            <div className="row myrounded-2 my-3 py-4 mx-1 border shadow">
                                <div className="col-12">
                                    <div>
                                        <div className="row border-bottom">
                                            <div className="col-12">
                                                <div className="row">
                                                    <div className="col-12 col-md-12 col-lg-6 mt-lg-3">
                                                        <div className="d-flex justify-content-center">
                                                            <img src={list.img} className='w-100' />
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-md-12 col-lg-6">
                                                        <p className="mygray-color text-center text-lg-left pt-3">{list.alamat}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row my-3">
                                            {list.jam.split(',').map((jam, selfIndex)=>{
                                                return  <div className="col-4 col-md-3 col-lg-3 fs-09 c-pointer">
                                                <button onClick={(e)=>{
                                                    setButtonControl({ 
                                                        ...buttonControl, 
                                                        object : selfIndex,
                                                        Card : Cardindex
                                                    })
                                                    setData({timeValue:jam})
                                                }} value={jam} className={buttonControl.object == selfIndex && buttonControl.Card == Cardindex?buttonControl.style.active:buttonControl.style.inActive}>{jam}</button>
                                            </div>
                                            })}
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <p className="mygray-color font-weight-bold">Price</p>
                                            <p className="font-weight-bold">${list.price}/seat</p>
                                        </div>
                                        <div className="row mt-5">
                                            <div className="col-10 col-md-12 col-lg-12 mx-auto">
                                                <div className="row">
                                                    <div className="col-6 col-md-12 col-lg-6">
                                                        <button className="mybtn mybtn-active w-100 myrounded-1" onClick={(e)=>{
                                                            history.push(`/order_page`)
                                                            dispatch({
                                                                type : 'SET_DATA_TICKET',
                                                                payload : {
                                                                    title : movie.title,
                                                                    cinema : list.cinema,
                                                                    cinema_img : list.img,
                                                                    show_time : data.timeValue,
                                                                    price   : list.price,
                                                                    seat    : list.no_seat,
                                                                    tgl : list.tgl,
                                                                    show_time : data.timeValue,
                                                                    order_code : list.order_code
                                                                }
                                                            })
                                                        }}>book now</button>
                                                    </div>
                                                    <div className="col-6 col-md-12 col-lg-6 justify-content-center align-self-center text-center my-md-3 my-lg-0">
                                                        <a class="color-primary font-weight-bold px-4 px-sm-4 px-md-0 px-lg-0">add to chart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
                <Footer />
            </div>
        </>
    )
}

export default MovieDetails
