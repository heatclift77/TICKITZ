import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
function OrderHistory() {
    const { user } = useSelector(state => state.user)
    const history = useHistory()
    const [historyTickets, setHistoryTickets] = useState([])
    const [page, setPage] = useState([])
    const [pageSelected, setPageSelected] = useState(1)
    const limit = 3
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER}/v1/ticket/user?id_user=${user.id_user}&limit=${limit}&offset=0`)
            .then(response => {
                setHistoryTickets(response.data.data)
                setPage(response.data.page)
            })
    }, [])
    return (
        <div className="mt-5">
            {historyTickets.map(tiket => {
                return <div className="bg-white rounded mb-3">
                    <div className="row">
                        <div className="col-12">
                            <div className="d-flex border-bottom justify-content-between py-4 px-4">
                                <div>
                                    <p className="mygray-color fs-08">{tiket.tanggal}</p>
                                    <h5 className="fw-600">{tiket.movie}</h5>
                                </div>
                                <h3>{tiket.cinema}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="d-flex justify-content-end py-4 px-4">
                                <div className='d-flex'>
                                    <button className="border-0 rounded text-white py-2 px-4 hover-color-primary" onClick={() => { history.push(`/app/user/ticket/${tiket.id_tiket}`) }}>details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            })}
            <div className="d-flex my-5">
                {page.map(data => {
                    return <button className={pageSelected === data.number ? "pagination pagination-active mx-2" : "pagination mx-2"} onClick={() => {
                        axios.get(data.link)
                            .then(res => {
                                setHistoryTickets(res.data.data)
                                setPageSelected(data.number)
                            })
                    }} >{data.number}</button>
                })}
            </div>
        </div>
    )
}

export default OrderHistory
