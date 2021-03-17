import {React, useState, useEffect} from 'react'
import {CardMovie} from '../../molekuls'
import axios from 'axios'

function UpComing() {
    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_SERVER}/movies/?page=1&limit=5`)
        .then(res => {
            setData(res.data.data)
        })
    })
    return (
        <div className="my-5">
            <div class="col-12 d-flex justify-content-between">
                <h5 class="font-weight-bold">UpComing Movies</h5>
                <a href="#" class="color-primary">view all</a>
            </div>
            <div class="row overflow-auto my-3">
                <div class="col-lg-12 d-sm-flex d-md-flex d-lg-block">
                    <button class="mybtn myrounded-1 mybtn-active mx-3 mt-lg-3">September</button>
                    <button class="mybtn myrounded-1 mx-3 mt-lg-3">October</button>
                    <button class="mybtn myrounded-1 mx-3 mt-lg-3">November</button>
                    <button class="mybtn myrounded-1 mx-3 mt-lg-3">Desember</button>
                    <button class="mybtn myrounded-1 mx-3 mt-lg-3">January</button>
                    <button class="mybtn myrounded-1 mx-3 mt-lg-3">Februari</button>
                    <button class="mybtn myrounded-1 mx-3 mt-lg-3">March</button>
                    <button class="mybtn myrounded-1 mx-3 mt-lg-3">April</button>
                    <button class="mybtn myrounded-1 mx-3 mt-lg-3">May</button>
                    <button class="mybtn myrounded-1 mx-3 mt-lg-3">Juni</button>
                    <button class="mybtn myrounded-1 mx-3 mt-lg-3">July</button>
                    <button class="mybtn myrounded-1 mx-3 mt-lg-3">August</button>
                </div>
            </div>
            <div className="d-flex overflow-auto py-5">
                {data.map(mov=>{
                    return <CardMovie title={mov.title} genre={mov.genre} img={mov.image} id_movie={mov.id_movie} />
                })}
            </div>
        </div>
    )
}

export default UpComing
