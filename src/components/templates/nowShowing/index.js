import {React, useState, useEffect} from 'react'
import {CardMovie2} from '../../molekuls'
import axios from 'axios'

function NowShowing() {
    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_SERVER}/movies/?page=1&limit=5`)
        .then(res => {
                setData(res.data.data)
            }
        )
        console.log(data);
    },[])
    return (
    <div className="mt-7 nowShowingHeight">
        <div class="col-12 d-flex justify-content-between">
            <h5 class="font-weight-bold">Now Showing</h5>
            <a href="#" class="color-primary">view all</a>
        </div>
        <div className="d-flex overflow-auto py-5">
                {data.map(mov=>{
                    return<CardMovie2 title={mov.title} genre={mov.genre} img={mov.image} id_movie={mov.id_movie} />
                })}
        </div>
    </div>
    )
}

export default NowShowing
