import {React, useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {CardMovie2} from '../../molekuls'
import axios from 'axios'

function NowShowing() {
    const history = useHistory()
    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_GET_TICKET_FILM}`)
        .then(res => {
                setData(res.data.data)
            }
        )
    },[])
    return (
    <div className="mt-7 nowShowingHeight">
        <div class="col-12 d-flex justify-content-between">
            <h5 class="font-weight-bold">Now Showing</h5>
            <a href="#" class="color-primary">view all</a>
        </div>
        <div className="d-flex overflow-auto py-5">
                {data.map(mov=>{
                    if(mov.status == '1'){
                        return<CardMovie2 title={mov.title} genre={mov.genre} img={mov.image} id_movie={mov.id_movie} onClick={
                            (e)=>{
                                history.push(`/ListTayang/${mov.code_ticket}`)
                            }
                        } />
                    }
                    return '';
                })}
        </div>
    </div>
    )
}

export default NowShowing
