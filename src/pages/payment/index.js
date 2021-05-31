import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Navbar, Footer } from '../../components/templates'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert'

import gplay from '../../asets/lg_gglpay.png'
import visa from '../../asets/lg_visa.png'
import gopay from '../../asets/lg_gopay.png'
import paypal from '../../asets/lg_paypal.png'
import dana from '../../asets/lg_dana.png'
import bca from '../../asets/lg_bca.png'
import bri from '../../asets/lg_bri.png'
import ovo from '../../asets/lg_ovo.png'

function Payment() {
    const history = useHistory()
    const  data  = JSON.parse(localStorage.getItem("_SET_DETAIL_PESANAN"))
    const { user } = useSelector(state => state.user)
    const [btnpayment, setBtnPayment] = useState({
        paymentSelected: '',
        index: -1
    })
    const handleReqOrder = (e)=>{ 
        if(btnpayment.paymentSelected.length !== 0){
            const detail_pesanan = {
                id_movie : data.id_movie,
                id_user :  data.id_user,
                id_cinema : data.id_cinema,
                cinema : data.cinema,
                alamat_cinema :data.alamat_cinema,
                kursi : data.kursi,
                harga : data.harga,
                jumlah_tiket : data.jumlah_tiket,
                movie : data.movie,
                jam_tayang : data.jam_tayang,
                tanggal : data.tanggal,
                bank : btnpayment.paymentSelected,
                data_kursi_cinema : data.data_kursi_cinema
            }
            axios({
                method : 'POST',
                url : `${process.env.REACT_APP_SERVER}/v1/ticket`,
                data : detail_pesanan
            })
            .then(res =>{
                swal("success", "transaksi berhasil", "success")
                history.push(`/app/user/ticket/${res.data.data.id_tiket}`)
            })
            .catch(err => {
                console.log(err.response);
            })
        }else{
            swal("Oops", "pilih metode pembayarannya dulu", "error")
        }
    }
    const formatRbuan = (value) => {
        const sisa = value.toString().length % 3
        let rupiah = value.toString().substr(0, sisa)
        const ribuan = value.toString().substr(sisa).match(/\d{3}/g);
        if (ribuan) {
            const separator = sisa ? '.' : '';
            rupiah += separator + ribuan.join('.');
        }
        return rupiah
    }
    return (
        <>
            <Navbar />
            <main className='container mt-7'>
                <section className="row my-5">
                    <div className="col-12 col-sm-12 col-lg-7">
                        {/*  */}
                        <div className="mt-3">
                            <h4 className="font-weight-bold py-2">Informasi Pembayaran</h4>
                            <div className="row bg-white myrounded-2">
                                <div className="col-12 py-3 px-4">
                                    <div className="d-flex justify-content-between border-bottom">
                                        <p className="mygray-color my-3">waktu & tgl</p>
                                        <p className="my-3">{data.tanggal} @ {data.jam_tayang}</p>
                                    </div>
                                    <div className="d-flex justify-content-between border-bottom">
                                        <p className="mygray-color my-3">Judul Film</p>
                                        <p className="my-3">{data.movie}</p>
                                    </div>
                                    <div className="d-flex justify-content-between border-bottom">
                                        <p className="mygray-color my-3">Cinema</p>
                                        <p className="my-3">{data.cinema}</p>
                                    </div>
                                    <div className="d-flex justify-content-between border-bottom">
                                        <p className="mygray-color my-3">Jumlah Tiket</p>
                                        <p className="my-3">{data.jumlah_tiket}</p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <p className="mygray-color my-3">Total Pembayaran</p>
                                        <h5 className="font-weight-bold my-3">Rp {formatRbuan(data.harga)}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*  */}
                        <div className="mt-5">
                            <h4 className="font-weight-bold py-2">Pilih Metode Pembayaran</h4>
                            <div className="row bg-white myrounded-2 py-4">
                                <div className="col-12 py-3 px-4 relative">
                                    <div className="row">
                                        <div className={(btnpayment.index === 1) ? "col-4 col-sm-4 col-lg-3 my-2 c-pointer payment-btn-active" : "col-4 col-sm-4 col-lg-3 my-2 c-pointer payment-btn"} onClick={() => { setBtnPayment({ paymentSelected: 'google pay', index: 1 }) }}>
                                            <div className="d-flex justify-content-center align-self-center border myrounded-1 py-2">
                                                <img src={gplay} alt="google play" />
                                            </div>
                                        </div>
                                        <div className={(btnpayment.index === 2) ? "col-4 col-sm-4 col-lg-3 my-2 c-pointer payment-btn-active" : "col-4 col-sm-4 col-lg-3 my-2 c-pointer payment-btn"} onClick={() => { setBtnPayment({ paymentSelected: 'visa', index: 2 }) }}>
                                            <div className="d-flex justify-content-center align-self-center border myrounded-1 py-2">
                                                <img src={visa} alt="visa"  />
                                            </div>
                                        </div>
                                        <div className={(btnpayment.index === 3) ? "col-4 col-sm-4 col-lg-3 my-2 c-pointer payment-btn-active" : "col-4 col-sm-4 col-lg-3 my-2 c-pointer payment-btn"} onClick={() => { setBtnPayment({ paymentSelected: 'gopay', index: 3 }) }}>
                                            <div className="d-flex justify-content-center align-self-center border myrounded-1 py-2">
                                                <img src={gopay} alt="gopay" />
                                            </div>
                                        </div>
                                        <div className={(btnpayment.index === 4) ? "col-4 col-sm-4 col-lg-3 my-2 c-pointer payment-btn-active" : "col-4 col-sm-4 col-lg-3 my-2 c-pointer payment-btn"} onClick={() => { setBtnPayment({ paymentSelected: 'paypal', index: 4 }) }}>
                                            <div className="d-flex justify-content-center align-self-center border myrounded-1 py-2">
                                                <img src={paypal} alt="paypal" />
                                            </div>
                                        </div>
                                        <div className={(btnpayment.index === 5) ? "col-4 col-sm-4 col-lg-3 my-2 c-pointer payment-btn-active" : "col-4 col-sm-4 col-lg-3 my-2 c-pointer payment-btn"} onClick={() => { setBtnPayment({ paymentSelected: 'dana', index: 5 }) }}>
                                            <div className="d-flex justify-content-center align-self-center border myrounded-1 py-2">
                                                <img src={dana} alt="dana" />
                                            </div>
                                        </div>
                                        <div className={(btnpayment.index === 6) ? "col-4 col-sm-4 col-lg-3 my-2 c-pointer payment-btn-active" : "col-4 col-sm-4 col-lg-3 my-2 c-pointer payment-btn"} onClick={() => { setBtnPayment({ paymentSelected: 'bca', index: 6 }) }}>
                                            <div className="d-flex justify-content-center align-self-center border myrounded-1 py-2">
                                                <img src={bca} alt="bca" />
                                            </div>
                                        </div>
                                        <div className={(btnpayment.index === 7) ? "col-4 col-sm-4 col-lg-3 my-2 c-pointer payment-btn-active" : "col-4 col-sm-4 col-lg-3 my-2 c-pointer payment-btn"} onClick={() => { setBtnPayment({ paymentSelected: 'bri', index: 7 }) }}>
                                            <div className="d-flex justify-content-center align-self-center border myrounded-1 py-2">
                                                <img src={bri} alt="bri" />
                                            </div>
                                        </div>
                                        <div className={(btnpayment.index === 8) ? "col-4 col-sm-4 col-lg-3 my-2 c-pointer payment-btn-active" : "col-4 col-sm-4 col-lg-3 my-2 c-pointer payment-btn"} onClick={() => { setBtnPayment({ paymentSelected: 'ovo', index: 8 }) }}>
                                            <div className="d-flex justify-content-center align-self-center border myrounded-1 py-2">
                                                <img src={ovo} alt="ovo" />
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
                                <input type="text" class="myrounded-2 w-100 py-3 px-3 border text-secondary" placeholder="write your Name" value={user.username} disabled />
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
                                <button className="mybtn myrounded-1 w-100 font-weight-bold py-2 hide-on-sm hide-on-md" 
                                onClick={()=>{
                                    history.push("/app/order_page")
                                }}
                                >Step Sebelumnya</button>
                            </div>
                            <div className="col-12 col-lg-5">
                                <button className="mybtn mybtn-active myrounded-1 w-100 py-2 py-sm-3 py-lg-2" onClick={handleReqOrder}>Bayar Pesanan</button>
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
