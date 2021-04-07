import {React, useState} from 'react'
import {Movies} from '../../atoms'
import {Link} from 'react-router-dom'
import style from './style.module.css'

function CardMovie2({img, title, genre, id_movie, onClick}) {
    const movie_details = `/movie_details/${id_movie}`
    const order_page = `/order_page/${id_movie}`
    return (
        <div>
            <div className="p-4 myrounded-1 border c-pointer hover-shadow mr-3 bg-white text-center hover-show-details position-relative">
                <Movies src={img}  />
                <div className={'details '+ style.width}>
                    <div className='my-3'>
                        <h5 className='font-weight-bold m-0'>{title}</h5>
                        <p className="mygray-color fs-08 m-0">{genre}</p>
                    </div>
                    <Link to={movie_details}>
                        <button class="mybtn rounded fs-08 fw-600 mt-lg-3 w-100">Details</button>
                    </Link>
                    <button class="mybtn mybtn-active rounded fs-08 fw-600 mt-3 w-100" onClick={onClick} >book now</button>
                </div>
            </div>
        </div>
    )
}

export default CardMovie2
