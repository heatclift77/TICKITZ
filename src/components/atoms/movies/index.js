import {React} from 'react'
// import {Small_Button} from '../../atoms'

function Movies({...rest}) {

    return (
        <div className="card-width">
            <img  className="w-100 cover myrounded-1" {...rest} />
        </div>
    )
}

export default Movies
