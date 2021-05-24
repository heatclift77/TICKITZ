import React,{useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {useHistory} from 'react-router-dom'
import swal from 'sweetalert'
import { Navbar, Footer } from '../../components/templates'

function OrderPage() {
    const  data  = JSON.parse(localStorage.getItem("_DATA_PESANAN"))
    const history = useHistory()
    const dispatch = useDispatch()
    const [choosedSeat, setChoosedSeat] = useState([])
    const [seat, setSeat] = useState({
        value : '-',
        seatCount : 0,
        style : {
            active : 'seat-box mybg-primary',
            inActive : 'seat-box' 
        }
    })
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
    function removeA(arr) {
        var what, a = arguments, L = a.length, ax;
        while (L > 1 && arr.length) {
            what = a[--L];
            while ((ax= arr.indexOf(what)) !== -1) {
                arr.splice(ax, 1);
            }
        }
        return arr;
    }
    const now = () => {
        const date = new Date()
        const hari = date.getDay()
        const tgl = date.getDate()
        const bulan = date.getMonth()
        const tahun = date.getFullYear()
        const namaHari = ["Senin","Selasa","Rabu","Kamis","Jum'at","Sabtu","Minggu"]
        const namaBulan = ["Jan","Feb","Mar","Apr","Mei","Jun","Jul", "Agu","Sept","Okt","Nov","Des"]
        // return `${namaHari[hari]}, ${tgl} ${namaBulan[bulan]} ${tahun}`
        return `${tgl}/${bulan}/${tahun}`
    }
    return (
        <div className="mybg-second">
            <Navbar />
            <main className="container mt-7">
                <section className="row my-5 pt-5">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-8">
                        <div className="">
                            <h5 className="fw-600">Judul Film</h5>
                            <div className="row py-3 px-4 bg-white myrounded-2 my-4">
                                <div className="col-12">
                                    <div className="d-flex justify-content-between">
                                        <div className="align-self-center">
                                            <h4 className="fw-600 m-0">{data.movie}</h4>
                                        </div>
                                        <div className="p-3 bg-light myrounded-2 cover" onClick={()=>{history.push("/app/changeFilm")}}>
                                            <a className="m-0 font-weight-bold color-primary" onClick={()=>{ 
                                            }} >ganti Film</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row py-4">
                            <div className="col-12 col-lg-8 mt-5">
                                <h5 className="fw-600">pilih Kursi anda</h5>
                            </div>
                            <div className="col-12 col-sm-12 col-lg-12 py-md-5 py-lg-0 px-md-5 px-lg-5 bg-white myrounded-2 my-4 relative">
                                <div className="row pt-5 px-2">
                                    <div className="col-12 col-lg-10 col-xl-10 mx-auto mt-lg-5">
                                        <p className="fw-600 text-center hide-on-sm">layar</p>
                                        <div className="myrounded-2 my-2"></div>
                                        <div className="row">
                                            <div className="col-5">
                                                <div className="row">
                                                    {data.kursi.split(",").map((item, index)=> {
                                                        if(index >= 36 ){
                                                            return ""
                                                        }else{
                                                            return <div className="col-2 p-1">
                                                            <button disabled={item == "SOLD OUT" ? true : false} className={item === "SOLD OUT" ?  "seat-box-passive border-0" : choosedSeat.indexOf(item) === -1 ? "seat-box border-0" :  "seat-box seat-box-active border-0"} style={{fontSize:"8px", }} onClick={()=>{
                                                            if(choosedSeat.indexOf(item) == -1){
                                                                setChoosedSeat([...choosedSeat, item])
                                                            }else{
                                                                removeA(choosedSeat, item)
                                                                setChoosedSeat([...choosedSeat])
                                                            }
                                                        }} >{item == "SOLD OUT" ? "" : item}</button>
                                                        </div>
                                                        }
                                                    })}
                                                </div>
                                            </div>
                                            <div className="ml-auto col-5">
                                                <div className="row">
                                                {data.kursi.split(",").map((item, index)=> {
                                                        if(index <= 35 ){
                                                            return ""
                                                        }else{
                                                            return <div className="col-2 p-1">
                                                            <button disabled={item == "SOLD OUT" ? true : false} className={item === "SOLD OUT" ?  "seat-box-passive border-0" : choosedSeat.indexOf(item) === -1 ? "seat-box border-0" :  "seat-box seat-box-active border-0"} style={{fontSize:"8px", }} onClick={()=>{
                                                            if(choosedSeat.indexOf(item) == -1){
                                                                setChoosedSeat([...choosedSeat, item])
                                                            }else{
                                                                removeA(choosedSeat, item)
                                                                setChoosedSeat([...choosedSeat])
                                                            }
                                                        }} >{item == "SOLD OUT" ? "" : item}</button>
                                                        </div>
                                                        }
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row my-5">
                                    <div className="col-12 col-lg-12">
                                        <h5 className="py-3 py-lg-0 fw-600">keterangan</h5>
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
                                                    <div className="mx-2 mx-lg-0 bg-light rounded" style={{width:"30px", height:"30px"}}></div>
                                                    <div className="mx-2 align-self-center">
                                                        <h4 className="my-0 color-third fw-400" style={{fontSize:"3vw"}}>Kosong</h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6 col-sm-6 col-lg-4 col-xl-3 my-2">
                                                <div className="d-flex">
                                                    <div className="mx-2 mx-lg-0 mybg-primary rounded" style={{width:"30px", height:"30px"}}></div>
                                                    <div className="mx-2 align-self-center">
                                                        <h4 className="my-0 color-third fw-400" style={{fontSize:"3vw"}}>Terpilih</h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6 col-sm-6 col-lg-4 col-xl-3 my-2">
                                                <div className="d-flex">
                                                    <div className="mx-2 mx-lg-0 mybg-third rounded" style={{width:"30px", height:"30px"}}></div>
                                                    <div className="mx-2 align-self-center">
                                                        <h4 className="my-0 color-third fw-400" style={{fontSize:"3vw"}}>Terjual</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <h5 className="fw-600 m-0">Detail Pesanan</h5>
                        <div className="row">
                            <div className="col-12 py-3 px-4 my-4 mx-0 mx-lg-3 bg-white shadow myrounded-2">
                                <div className="py-4 border-bottom">
                                    <div className="d-flex text-center justify-content-center">
                                        <img src={data.cinema_logo} />
                                    </div>
                                </div>
                                <div className="py-4 border-bottom">
                                    <div className="d-flex justify-content-between my-2">
                                        <p className="mygray-color m-0">{now()}</p>
                                        <p className="font-weight-bold m-0">{data.jam_tayang}</p>
                                    </div>
                                    <div className="d-flex justify-content-between my-2">
                                        <p className="mygray-color m-0">Harga / Pcs</p>
                                        <p className="font-weight-bold m-0">Rp{formatRbuan(data.harga)}</p>
                                    </div>
                                    <div className="row">
                                        <div className="col-5">
                                            <p className="mygray-color m-0">Kursi</p>
                                        </div>
                                        <div className="ml-auto col-5">
                                            <p className="font-weight-bold m-0 text-right" style={{wordBreak:"break-all"}}>{choosedSeat.join(",")}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between py-4">
                                    <h5 className="font-weight-bold m-0">Total</h5>
                                    <h5 className="font-weight-bold m-0 color-primary">Rp {formatRbuan(choosedSeat.length * data.harga)}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-12 col-lg-4 my-2">
                        <button class="mybtn mybtn-active myrounded-2 shadow py-3 w-100 font-weight-bold" onClick={
                            ()=>{
                                if(choosedSeat.length == 0){
                                    swal("Oops", "pilih kursinya dulu", "error")
                                }else{
                                    const detail_pesanan = {
                                        id_movie : data.id_movie,
                                        id_user :  data.id_user,
                                        id_cinema : data.id_cinema,
                                        cinema : data.cinema,
                                        alamat_cinema :data.alamat_cinema,
                                        kursi : choosedSeat,
                                        harga : choosedSeat.length * data.harga,
                                        jumlah_tiket : choosedSeat.length,
                                        movie : data.movie,
                                        jam_tayang : data.jam_tayang,
                                        tanggal : now(),
                                        data_kursi_cinema : data.kursi
                                    }
                                    localStorage.setItem("_SET_DETAIL_PESANAN", JSON.stringify(detail_pesanan))
                                    history.push('/app/payment')
                                }
                            }
                        }>Pesan Sekarang</button>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default OrderPage
