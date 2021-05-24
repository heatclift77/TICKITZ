import React from 'react'
import {Movies} from '../../atoms'
import {Link} from 'react-router-dom'

function CardMovie({img, title, genre, onClick}) {
    return (
        <div>
            <div className="p-4 myrounded-1 border c-pointer hover-shadow mr-3">
                <Movies src={img}  />
                <div className='my-3'>
                    <h5 className='font-weight-bold m-0 d-inline-block text-truncate' style={{maxWidth:"160px"}}>{title}</h5>
                    <p className="mygray-color fs-08 m-0">{genre}</p>
                </div>
                <button class="mybtn rounded fs-08 fw-600 mt-lg-3 w-100" onClick={onClick} >Details</button>
            </div>
        </div>
    )
}

export default CardMovie
