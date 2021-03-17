import React from 'react'
import {Navbar, Footer} from '../../components/templates'
import gplay from '../../asets/lg_gglpay.png'
import visa from '../../asets/lg_visa.png'
import gopay from '../../asets/lg_gopay.png'
import paypal from '../../asets/lg_paypal.png'
import dana from '../../asets/lg_dana.png'
import bca from '../../asets/lg_bca.png'
import bri from '../../asets/lg_bri.png'
import ovo from '../../asets/lg_ovo.png'

function Payment() {
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
                                        <p className="my-3">Tuesday, 07 July 2020 at 02:00pm</p>
                                    </div>
                                    <div className="d-flex justify-content-between border-bottom">
                                        <p className="mygray-color my-3">Movie title</p>
                                        <p className="my-3">Spider-Man: Homecoming</p>
                                    </div>
                                    <div className="d-flex justify-content-between border-bottom">
                                        <p className="mygray-color my-3">Cinema Name</p>
                                        <p className="my-3">CineOne21 Cinema</p>
                                    </div>
                                    <div className="d-flex justify-content-between border-bottom">
                                        <p className="mygray-color my-3">Number of tickets</p>
                                        <p className="my-3">3 pieces</p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <p className="mygray-color my-3">Date & time</p>
                                        <h5 className="font-weight-bold my-3">$30.0</h5>
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
                                        <div className="col-4 col-sm-4 col-lg-3 my-2">
                                            <div className="d-flex justify-content-center align-self-center border myrounded-1 py-2">
                                                <img src={gplay} />
                                            </div>
                                        </div>
                                        <div className="col-4 col-sm-4 col-lg-3 my-2">
                                            <div className="d-flex justify-content-center align-self-center border myrounded-1 py-2">
                                                <img src={visa} />
                                            </div>
                                        </div>
                                        <div className="col-4 col-sm-4 col-lg-3 my-2">
                                            <div className="d-flex justify-content-center align-self-center border myrounded-1 py-2">
                                                <img src={gopay} />
                                            </div>
                                        </div>
                                        <div className="col-4 col-sm-4 col-lg-3 my-2">
                                            <div className="d-flex justify-content-center align-self-center border myrounded-1 py-2">
                                                <img src={paypal} />
                                            </div>
                                        </div>
                                        <div className="col-4 col-sm-4 col-lg-3 my-2">
                                            <div className="d-flex justify-content-center align-self-center border myrounded-1 py-2">
                                                <img src={dana} />
                                            </div>
                                        </div>
                                        <div className="col-4 col-sm-4 col-lg-3 my-2">
                                            <div className="d-flex justify-content-center align-self-center border myrounded-1 py-2">
                                                <img src={bca} />
                                            </div>
                                        </div>
                                        <div className="col-4 col-sm-4 col-lg-3 my-2">
                                            <div className="d-flex justify-content-center align-self-center border myrounded-1 py-2">
                                                <img src={bri} />
                                            </div>
                                        </div>
                                        <div className="col-4 col-sm-4 col-lg-3 my-2">
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
                                <label for="" class="mygray-color">Full Name</label>
                                <input type="text" class="myrounded-2 w-100 py-3 px-3 border text-secondary" placeholder="write your Name" />
                            </div>
                            <div class="col-12 my-3">
                                <label for="" class="mygray-color">Email</label>
                                <input type="text" class="myrounded-2 w-100 py-3 px-3 border text-secondary" placeholder="write your email" />
                            </div>
                            <div class="col-12 my-3">
                                <label for="" class="mygray-color">Phone Number</label>
                                <div class="d-flex myrounded-2 w-100 py-3 border text-secondary">
                                    <div class="my-auto border-right px-3">
                                        <p class="mygray-color m-0">+62</p>
                                    </div>
                                    <input type="number" class="border-0 bg-transparent mx-3" placeholder="Write your number" />
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
                                <button className="mybtn mybtn-active myrounded-1 w-100 py-2 py-sm-3 py-lg-2">pay your order</button>
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
