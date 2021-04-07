import React,{useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {useHistory} from 'react-router-dom'
import { Navbar, Footer } from '../../components/templates'

function OrderPage() {
    const { data } = useSelector(state => state.helper)
    const history = useHistory()
    const dispatch = useDispatch()
    const [seat, setSeat] = useState({
        value : '-',
        seatCount : 0,
        style : {
            active : 'seat-box mybg-primary',
            inActive : 'seat-box' 
        }
    })
    const split_seat = data.seat.split('.')
    const seat_right = split_seat[1].split('#')
    const seat_left = split_seat[0].split('#')
    const seat_left_1 = seat_left[0].split(',')
    const seat_left_2 = seat_left[1].split(',')
    const seat_left_3 = seat_left[2].split(',')
    const seat_left_4 = seat_left[3].split(',')
    const seat_left_5 = seat_left[4].split(',')
    const seat_left_6 = seat_left[5].split(',')
    const seat_right_1 = seat_right[0].split(',')
    const seat_right_2 = seat_right[1].split(',')
    const seat_right_3 = seat_right[2].split(',')
    const seat_right_4 = seat_right[3].split(',')
    const seat_right_5 = seat_right[4].split(',')
    const seat_right_6 = seat_right[5].split(',')
    return (
        <div className="mybg-second">
            <Navbar />
            <main className="container mt-7">
                <section className="row my-5 pt-5">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-8">
                        <div className="hide-on-sm hide-on-md">
                            <h5 className="fw-600">Movie Selected</h5>
                            <div className="row py-3 px-4 bg-white myrounded-2 my-4">
                                <div className="col-12">
                                    <div className="d-flex justify-content-between">
                                        <div className="align-self-center">
                                            <h4 className="fw-600 m-0">{data.title}</h4>
                                        </div>
                                        <div className="p-3 bg-light myrounded-2 cover">
                                            <a className="m-0 font-weight-bold color-primary">change movie</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row py-4">
                            <div className="col-12 col-lg-8 mt-5">
                                <h5 className="fw-600">Choose Your Seat</h5>
                            </div>
                            <div className="col-12 col-sm-12 col-lg-12 py-md-5 py-lg-0 px-md-5 px-lg-5 bg-white myrounded-2 my-4 relative">
                                <div className="row pt-5 px-2">
                                    <div className="col-12 col-lg-10 col-xl-10 mx-auto mt-lg-5">
                                        <p className="fw-600 text-center hide-on-sm">Screen</p>
                                        <div className="myrounded-2 my-2"></div>
                                        {/* seat */}
                                        <div className="d-flex justify-content-between">
                                            <div className="seat py-2 border-bottom-sm border-bottom-md border-danger">
                                                <div className="d-flex">
                                                    {seat_left_1.map((value, index) => {
                                                        return <div className={
                                                            (seat.value.includes(value+',')==true)?seat.style.active:seat.style.inActive
                                                        } onClick={
                                                            (e)=>{
                                                                if(seat.value == '-'){
                                                                    setSeat({
                                                                        ...seat,
                                                                        value : value + ',',
                                                                        seatCount : seat.seatCount + 1
                                                                    })
                                                                }else{
                                                                    if(seat.value.includes(value) == true){
                                                                        const splitValue = seat.value.split(value+',').join('')
                                                                        setSeat({
                                                                            ...seat,
                                                                            value : splitValue,
                                                                            seatCount : seat.seatCount - 1
                                                                        })
                                                                    }else{
                                                                        setSeat({
                                                                            ...seat,
                                                                            value : seat.value += value+',',
                                                                            seatCount : seat.seatCount  + 1
                                                                        })
                                                                    }
                                                                }
                                                            }
                                                        }>
                                                        </div>
                                                    })}
                                                </div>
                                                <div className="d-flex">
                                                    {seat_left_2.map(value => {
                                                        return <div className="seat-box sb">
                                                        </div>
                                                    })}
                                                </div>
                                                <div className="d-flex">
                                                    {seat_left_3.map(value => {
                                                        return <div className="seat-box sb">
                                                        </div>
                                                    })}
                                                </div>
                                                <div className="d-flex">
                                                    {seat_left_4.map(value => {
                                                        return <div className="seat-box sb">
                                                        </div>
                                                    })}
                                                </div>
                                                <div className="d-flex">
                                                    {seat_left_5.map(value => {
                                                        return <div className="seat-box sb">
                                                        </div>
                                                    })}
                                                </div>
                                                <div className="d-flex">
                                                    {seat_left_6.map(value => {
                                                        return <div className="seat-box sb">
                                                        </div>
                                                    })}
                                                </div>
                                            </div>
                                            <div className="seat py-2 border-bottom-sm border-bottom-md border-danger">
                                                <div className="d-flex">
                                                    {seat_right_1.map(value => {
                                                        return <div className="seat-box sb">
                                                        </div>
                                                    })}
                                                </div>
                                                <div className="d-flex">
                                                    {seat_right_2.map(value => {
                                                        return <div className="seat-box sb">
                                                        </div>
                                                    })}
                                                </div>
                                                <div className="d-flex">
                                                    {seat_right_3.map(value => {
                                                        return <div className="seat-box sb">
                                                        </div>
                                                    })}
                                                </div>
                                                <div className="d-flex">
                                                    {seat_right_4.map(value => {
                                                        return <div className="seat-box sb">
                                                        </div>
                                                    })}
                                                </div>
                                                <div className="d-flex">
                                                    {seat_right_5.map(value => {
                                                        return <div className="seat-box sb">
                                                        </div>
                                                    })}
                                                </div>
                                                <div className="d-flex">
                                                    {seat_right_6.map(value => {
                                                        return <div className="seat-box sb">
                                                        </div>
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row my-5">
                                    <div className="col-12 col-lg-12">
                                        <h5 className="py-3 py-lg-0 fw-600">Seating key</h5>
                                        <div className="row mx-auto">
                                            <div className="col-6 col-sm-6 hide-on-lg hide-on-xl my-3">
                                                <div className="d-flex">
                                                    {/* <img src="assets/down_arrow.png" > */}
                                                    <div className="mx-2 align-self-center">
                                                        <h5 className="my-0 color-third fw-600">A - G</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6 col-sm-6 hide-on-lg hide-on-xl my-3">
                                                <div className="d-flex">
                                                    {/* <img src="assets/right_arrow.png" > */}
                                                    <div className="mx-2 align-self-center">
                                                        <h5 className="my-0 color-third fw-600">1 - 14</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6 col-sm-6 col-lg-4 col-xl-3 my-2">
                                                <div className="d-flex">
                                                    <div className="seat-box mx-sm-2 mx-lg-0 bg-light"></div>
                                                    <div className="mx-sm-2 align-self-center">
                                                        <h4 className="my-0 color-third fw-400">Available</h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6 col-sm-6 col-lg-4 col-xl-3 my-2">
                                                <div className="d-flex">
                                                    <div className="seat-box mx-sm-2 mx-lg-0 mybg-primary"></div>
                                                    <div className="mx-sm-2 align-self-center">
                                                        <h4 className="my-0 color-third fw-400">Selected</h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6 col-sm-6 col-lg-4 col-xl-3 my-2">
                                                <div className="d-flex">
                                                    <div className="seat-box mx-sm-2 mx-lg-0"></div>
                                                    <div className="mx-sm-2 align-self-center">
                                                        <h4 className="my-0 color-third fw-400">Love nest</h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6 col-sm-6 col-lg-4 col-xl-3 my-2">
                                                <div className="d-flex">
                                                    <div className="seat-box mx-sm-2 mx-lg-0 mybg-third"></div>
                                                    <div className="mx-sm-2 align-self-center">
                                                        <h4 className="my-0 color-third fw-400">sold</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="seat-key mygray-color hide-on-sm hide-on-md">
                                    <p id="a">A</p>
                                    <p id="b">B</p>
                                    <p id="c">C</p>
                                    <p id="d">D</p>
                                    <p id="e">E</p>
                                    <p id="f">F</p>
                                    <p id="g">G</p>
                                </div>
                                <div className="hide-on-sm hide-on-md">
                                    <div className="seat-number d-flex mygray-color">
                                        <p id="n1">1</p>
                                        <p id="n2">2</p>
                                        <p id="n3">3</p>
                                        <p id="n4">4</p>
                                        <p id="n5">5</p>
                                        <p id="n6">6</p>
                                        <p id="n7">7</p>
                                    </div>
                                </div> */}
                                {/* <div className="hide-on-sm hide-on-md">
                                    <div className="seat-number-2 d-flex mygray-color">
                                        <p id="a1">1</p>
                                        <p id="a2">2</p>
                                        <p id="a3">3</p>
                                        <p id="a4">4</p>
                                        <p id="a5">5</p>
                                        <p id="a6">6</p>
                                        <p id="a7">7</p>
                                    </div>
                                </div> */}
                                <div className="v-line-green hide-on-lg hide-on-xl"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 hide-on-sm hide-on-md">
                        <h5 className="fw-600 m-0">Order Info</h5>
                        <div className="row">
                            <div className="col-12 py-3 px-4 my-4 mx-3 bg-white shadow myrounded-2">
                                <div className="my-4">
                                    <div className="d-flex text-center justify-content-center">
                                        <img src={data.cinema_img} />
                                    </div>
                                </div>
                                <div className="py-4 border-bottom">
                                    <div className="d-flex justify-content-between my-2">
                                        <p className="mygray-color m-0">{data.tgl}</p>
                                        <p className="font-weight-bold m-0">{data.show_time}</p>
                                    </div>
                                    <div className="d-flex justify-content-between my-2">
                                        <p className="mygray-color m-0">One ticket price</p>
                                        <p className="font-weight-bold m-0">${data.price}</p>
                                    </div>
                                    <div className="d-flex justify-content-between my-2">
                                        <p className="mygray-color m-0">Seat choosed</p>
                                        <p className="font-weight-bold m-0">{seat.value}</p>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between py-4">
                                    <h5 className="font-weight-bold m-0">Total Payment</h5>
                                    <h5 className="font-weight-bold m-0 color-primary">${seat.seatCount * data.price}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-lg-4 bg-white myrounded-2 my-4 hide-on-lg hide-on-xl">
                        <div className="d-flex justify-content-between py-4 px-3">
                            <h5 className="m-0 mygray-color fw-600">Choosed</h5>
                            <h5 className="m-0 fw-600"></h5>
                        </div>
                    </div>
                    <div class="col-12 col-sm-12 col-lg-4 my-2">
                        <button class="mybtn myrounded-2 shadow py-3 w-100 font-weight-bold">Change Your Movie</button>
                    </div>
                    <div class="col-12 col-sm-12 col-lg-4 my-2">
                        <button class="mybtn mybtn-active myrounded-2 shadow py-3 w-100 font-weight-bold" onClick={
                            (e)=>{
                                history.push('/payment')
                                dispatch({
                                    type : 'SET_ORDER_DETAILS',
                                    payload : {
                                        dateNtime : data.tgl + ' at ' + data.show_time,
                                        movie_title : data.title,
                                        cinema_name : data.cinema,
                                        ticket_count   : seat.seatCount,
                                        total_price    : seat.seatCount * data.price,
                                        data_seat :  seat.value
                                    }
                                })
                            }
                        }>Chekout now</button>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default OrderPage
