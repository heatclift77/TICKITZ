import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import lg from '../../asets/lg_tickitz.png'
import {Navbar, Footer} from '../../components/templates'
import axios from 'axios'
export default function TicketResult() {
    const { id } = useParams();
    const [tiket, setTiket] = useState([])
    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_SERVER}/v1/ticket?id_tiket=${id}`)
        .then(res => {
            setTiket(res.data.data)
        })
        .catch(err => {
            console.log(err.response);
        })
    },[id])
    const formatRbuan = (value) => {
        if(value == undefined){
            return 0
        }else{
            const sisa = value.toString().length % 3
            let rupiah = value.toString().substr(0, sisa)
            const ribuan = value.toString().substr(sisa).match(/\d{3}/g);
            if (ribuan) {
                const separator = sisa ? '.' : '';
                rupiah += separator + ribuan.join('.');
            }
            return rupiah
        }
    }
    if(tiket.length == 0){
        return (
            <div className="container" style={{minHeight:"100vh", width:"100vw", position:"relative"}}>
            <div className="position-absolute" style={{top:"50%", left:"50%", transform:"translate(-50%, -50%)"}}>
                <h3 className="text-danger text-center font-weight-bold">404</h3>
                <p className="text-center">Page Not Found!!!</p>
            </div>
        </div>
        )
    }else{
        return (
            <>
            <Navbar />
            <div className="my-5" style={{ background: "#F5F6F8"}}>
                <div style={{ marginTop: "5rem" }} className="container">
                    <div className="row">
                        <div className="col-10 mx-auto myrounded-2 bg-white p-5 my-5">
                            <h2 className="mb-4 text-center">Proof of Payment</h2>
                            <div className="d-flex">
                                <div className="py-3 px-5 d-flex justify-content-lg-between" style={{ background: "#5F2EEA", borderTopLeftRadius: "1rem", borderRight: "2px dashed #DEDEDE", width: "60%" }}>
                                    <div style={{ width: "100px" }}>
                                        <img src={lg} className="w-100" />
                                    </div>
                                    <p className="m-0 align-self-center text-white">Admit One</p>
                                </div>
                                <div className="py-3 px-5 d-flex justify-content-center" style={{ background: "#5F2EEA", borderTopRightRadius: "1rem", borderLeft: "2px dashed #DEDEDE", width: "40%" }}>
                                    <div style={{ width: "100px" }}>
                                        <img src={lg} className="w-100" />
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="py-3 px-5 d-flex justify-content-lg-between" style={{ borderBottomLeftRadius: "1rem", borderRight: "2px dashed #DEDEDE", borderLeft: "2px solid #DEDEDE", borderBottom: "2px solid #DEDEDE", width: "60%" }}>
                                    <div className="row">
                                        <div className="col-12">
                                            <div>
                                                <label style={{ color: "#DEDEDE" }}>Movie</label>
                                                <p className="font-weight-bold">{tiket.movie}</p>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-4">
                                            <div>
                                                <label style={{ color: "#DEDEDE" }}>tgl</label>
                                                <p className="font-weight-bold">{tiket.tanggal}</p>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-4">
                                            <div>
                                                <label style={{ color: "#DEDEDE" }}>jam tayang</label>
                                                <p className="font-weight-bold">{tiket.jam_tayang}</p>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-4">
                                            <div>
                                                <label style={{ color: "#DEDEDE" }}>kategori</label>
                                                <p className="font-weight-bold">action, advanture</p>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-4">
                                            <div>
                                                <label style={{ color: "#DEDEDE" }}>jumlah ticket</label>
                                                <p className="font-weight-bold">{tiket.jumlah_tiket} Pcs</p>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-4">
                                            <div>
                                                <label style={{ color: "#DEDEDE" }}>kursi</label>
                                                <p className="font-weight-bold">{tiket.kursi}</p>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-4">
                                            <div>
                                                <label style={{ color: "#DEDEDE" }}>Price</label>
                                                <p className="font-weight-bold">Rp { formatRbuan(tiket.harga)}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="py-3 px-5 d-flex justify-content-center" style={{ borderBottomRightRadius: "1rem", borderRight: "2px solid #DEDEDE", borderLeft: "2px dashed #DEDEDE", borderBottom: "2px solid #DEDEDE", width: "40%" }}>
                                    <div style={{ width: "100px" }}>
                                        <img src={lg} className="w-100" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            </>
        )
    }
}
