import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Navbar, Footer } from '../../components/templates'
import axios from 'axios'
import gplay from '../../asets/lg_gglpay.png'
import visa from '../../asets/lg_visa.png'
import gopay from '../../asets/lg_gopay.png'
import paypal from '../../asets/lg_paypal.png'
import dana from '../../asets/lg_dana.png'
import bca from '../../asets/lg_bca.png'
import bri from '../../asets/lg_bri.png'
import ovo from '../../asets/lg_ovo.png'

function Payment() {
    const { data } = useSelector(state => state.order_details)
    const { user } = useSelector(state => state.user)
    const code = useSelector(state => state.helper)
    const [btnpayment, setBtnPayment] = useState({
        paymentSelected: '',
        index: -1
    })
    // if (window.performance) {
    //     if (performance.navigation.type == 1) {
    //         alert("This page is reloaded");
    //     } else {
    //         alert("This page is not reloaded");
    //     }
    // }
    const handleReqOrder = (e)=>{
        const data_seat =  data.data_seat.substring(0, data.data_seat.length -1).split(',').map(item=>{
            return code.data.seat.replace(item,'SOLD OUT')
        })  
        axios({
            method : 'POST',
            url : `${process.env.REACT_APP_SERVER}/reqTransaction`,
            data : {
                id_user : user.id_user,
                id_ticket : '',
                seat : data_seat,
                order_code : code.order_code
            }
        })
    }
    return (
        <>
            <Navbar />
            <main className='container mt-7'>
                <section className="row my-5">
                    <div className="col-12 col-sm-12 col-lg-7">
                        {/*  */}
                        <div className="mt-3">
                            <h4 className="font-weight-bold py-2">Payment Info</h4>
                            <div className="row bg-white myrounded-2">
                                <div className="col-12 py-3 px-4">
                                    <div className="d-flex justify-content-between border-bottom">
                                        <p className="mygray-color my-3">Date & time</p>
                                        <p className="my-3">{data.dateNtime}</p>
                                    </div>
                                    <div className="d-flex justify-content-between border-bottom">
                                        <p className="mygray-color my-3">Movie title</p>
                                        <p className="my-3">{data.movie_title}</p>
                                    </div>
                                    <div className="d-flex justify-content-between border-bottom">
                                        <p className="mygray-color my-3">Cinema Name</p>
                                        <p className="my-3">{data.cinema_name}</p>
                                    </div>
                                    <div className="d-flex justify-content-between border-bottom">
                                        <p className="mygray-color my-3">Number of tickets</p>
                                        <p className="my-3">{data.ticket_count}</p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <p className="mygray-color my-3">Total Payment</p>
                                        <h5 className="font-weight-bold my-3">${data.total_price}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*  */}
                        <div className="mt-5">
                            <h4 className="font-weight-bold py-2">Choose a Payment Method</h4>
                            <div className="row bg-white myrounded-2 py-4">
                                <div className="col-12 py-3 px-4 relative">
                                    <div className="row">
                                        <div className={(btnpayment.index == 1) ? "col-4 col-sm-4 col-lg-3 my-2 c-pointer payment-btn-active" : "col-4 col-sm-4 col-lg-3 my-2 c-pointer payment-btn"} onClick={() => { setBtnPayment({ paymentSelected: 'google pay', index: 1 }) }}>
                                            <div className="d-flex justify-content-center align-self-center border myrounded-1 py-2">
                                                <img src={gplay} />
                                            </div>
                                        </div>
                                        <div className={(btnpayment.index == 2) ? "col-4 col-sm-4 col-lg-3 my-2 c-pointer payment-btn-active" : "col-4 col-sm-4 col-lg-3 my-2 c-pointer payment-btn"} onClick={() => { setBtnPayment({ paymentSelected: 'visa', index: 2 }) }}>
                                            <div className="d-flex justify-content-center align-self-center border myrounded-1 py-2">
                                                <img src={visa} />
                                            </div>
                                        </div>
                                        <div className={(btnpayment.index == 3) ? "col-4 col-sm-4 col-lg-3 my-2 c-pointer payment-btn-active" : "col-4 col-sm-4 col-lg-3 my-2 c-pointer payment-btn"} onClick={() => { setBtnPayment({ paymentSelected: 'gopay', index: 3 }) }}>
                                            <div className="d-flex justify-content-center align-self-center border myrounded-1 py-2">
                                                <img src={gopay} />
                                            </div>
                                        </div>
                                        <div className={(btnpayment.index == 4) ? "col-4 col-sm-4 col-lg-3 my-2 c-pointer payment-btn-active" : "col-4 col-sm-4 col-lg-3 my-2 c-pointer payment-btn"} onClick={() => { setBtnPayment({ paymentSelected: 'paypal', index: 4 }) }}>
                                            <div className="d-flex justify-content-center align-self-center border myrounded-1 py-2">
                                                <img src={paypal} />
                                            </div>
                                        </div>
                                        <div className={(btnpayment.index == 5) ? "col-4 col-sm-4 col-lg-3 my-2 c-pointer payment-btn-active" : "col-4 col-sm-4 col-lg-3 my-2 c-pointer payment-btn"} onClick={() => { setBtnPayment({ paymentSelected: 'dana', index: 5 }) }}>
                                            <div className="d-flex justify-content-center align-self-center border myrounded-1 py-2">
                                                <img src={dana} />
                                            </div>
                                        </div>
                                        <div className={(btnpayment.index == 6) ? "col-4 col-sm-4 col-lg-3 my-2 c-pointer payment-btn-active" : "col-4 col-sm-4 col-lg-3 my-2 c-pointer payment-btn"} onClick={() => { setBtnPayment({ paymentSelected: 'bca', index: 6 }) }}>
                                            <div className="d-flex justify-content-center align-self-center border myrounded-1 py-2">
                                                <img src={bca} />
                                            </div>
                                        </div>
                                        <div className={(btnpayment.index == 7) ? "col-4 col-sm-4 col-lg-3 my-2 c-pointer payment-btn-active" : "col-4 col-sm-4 col-lg-3 my-2 c-pointer payment-btn"} onClick={() => { setBtnPayment({ paymentSelected: 'bri', index: 7 }) }}>
                                            <div className="d-flex justify-content-center align-self-center border myrounded-1 py-2">
                                                <img src={bri} />
                                            </div>
                                        </div>
                                        <div className={(btnpayment.index == 8) ? "col-4 col-sm-4 col-lg-3 my-2 c-pointer payment-btn-active" : "col-4 col-sm-4 col-lg-3 my-2 c-pointer payment-btn"} onClick={() => { setBtnPayment({ paymentSelected: 'ovo', index: 8 }) }}>
                                            <div className="d-flex justify-content-center align-self-center border myrounded-1 py-2">
                                                <img src={ovo} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <p className="mygray-color text-center">or</p>
                                    </div>
                                </div>
                                <div className="text-center mx-auto">
                                    <p className="mygray-color">Pay via cash. <span className="font-weight-bold color-primary">See how it work</span></p>
                                </div>
                            </div>
                        </div>
                        {/*  */}
                    </div>
                    <div class="col-12 col-sm-12 col-lg-4 mx-auto my-5 my-sm-5 my-lg-3">
                        <h4 class="font-weight-bold py-2">Personal Info</h4>
                        <div class="row bg-white myrounded-2 px-3">
                            <div class="col-12 my-3">
                                <label for="" class="mygray-color">FullName</label>
                                <input type="text" class="myrounded-2 w-100 py-3 px-3 border text-secondary" placeholder="write your Name" value={user.firstName + ' ' + user.lastName} disabled />
                            </div>
                            <div class="col-12 my-3">
                                <label for="" class="mygray-color">Email</label>
                                <input type="text" class="myrounded-2 w-100 py-3 px-3 border text-secondary" placeholder="write your email" value={user.email} disabled />
                            </div>
                            <div class="col-12 my-3">
                                <label for="" class="mygray-color">Phone Number</label>
                                <div class="d-flex myrounded-2 w-100 py-3 border text-secondary">
                                    <div class="my-auto border-right px-3">
                                        <p class="mygray-color m-0">+62</p>
                                    </div>
                                    <input type="number" class="border-0 bg-transparent mx-3" placeholder="Write your number" value={user.telephone} disabled />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="row my-5">
                    <div className="col-12 col-lg-7">
                        <div className="row justify-content-lg-between">
                            <div className="col-12 col-lg-5">
                                <button className="mybtn myrounded-1 w-100 font-weight-bold py-2 hide-on-sm hide-on-md">previous step</button>
                            </div>
                            <div className="col-12 col-lg-5">
                                <button className="mybtn mybtn-active myrounded-1 w-100 py-2 py-sm-3 py-lg-2" onClick={handleReqOrder}>pay your order</button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>

    )
}

export default Payment
