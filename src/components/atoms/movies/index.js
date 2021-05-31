import {React} from 'react'

function Movies({...rest}) {

    return (
        <div className="card-width">
            <img  className="w-100 cover myrounded-1" alt="movie" {...rest} />
        </div>
    )
}

export default Movies
