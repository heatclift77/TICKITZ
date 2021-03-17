import React from 'react'
import dummyImage from '../../../asets/vendor_lg2.png'

function OrderHistoryCard(props) {
    const {title, tgl, img, onClick} = props
    return (
        <div className="bg-white rounded mt-5">
            <div className="row">
                <div className="col-12">
                    <div className="d-flex border-bottom justify-content-between py-4 px-4">
                        <div>
                            <p className="mygray-color fs-08">{tgl}</p>
                            <h5 className="fw-600">{title}</h5>
                        </div>
                        <img src={dummyImage} />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="d-flex justify-content-between py-4 px-4">
                        <button className="border-0 rounded mygreen-color text-white py-2 px-4">Ticket In Active</button>
                        <div className='d-flex'>
                            <button className="border-0 rounded mygreen-color text-white py-2 px-4" onClick={onClick}>delete</button>
                            {/* <p clas Name="mygray-color fs-08 m-0 align-self-center">Show Details</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderHistoryCard
