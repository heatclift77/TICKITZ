import React from 'react'
import {useSelector} from 'react-redux'
import {Dropdown} from '../../organism'

function PremierLocation() {
    const cinema = useSelector(state=>state.cinema)
    return (
        <div>
            <h2 className='fw-600 my-3'>Premier Location</h2>
            <div className='bg-white py-5 px-4 rounded'>
                <div className="row mb-3">
                    {cinema.data.map(data=>{
                        return  <div className="col-4">
                        <div className='c-pointer py-3 px-4 w-100 btn-img rounded'>
                            <img src={data.img} className='w-100' alt="/" />
                        </div>
                    </div>
                    })}
                </div>
                <Dropdown />
            </div>
        </div>
    )
}

export default PremierLocation
