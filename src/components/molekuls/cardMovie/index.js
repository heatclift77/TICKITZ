import React from 'react'
import {Movies} from '../../atoms'
import {Link} from 'react-router-dom'

function CardMovie({img, title, genre, id_movie}) {
    const movie_details = `/movie_details/${id_movie}`
    return (
        <div>
            <div className="p-4 myrounded-1 border c-pointer hover-shadow mr-3 text-center">
                <Movies src={img}  />
                <div className='my-3'>
                    <h5 className='font-weight-bold m-0'>{title}</h5>
                    <p className="mygray-color fs-08 m-0">{genre}</p>
                </div>
                <Link to={movie_details}><button class="mybtn rounded fs-08 fw-600 mt-lg-3 w-100">Details</button></Link>
            </div>
        </div>
    )
}

export default CardMovie
