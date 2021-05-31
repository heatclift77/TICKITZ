import React from 'react'
import fb from '../../../asets/fb.png'

function FbButton() {
    return (
        <div className="d-flex p-3 border myrounded-1 shadow c-pointer mx-3">
            <div className="mr-3 align-self-center">
                <img src={fb} className="w-100" alt="facebook" />
            </div>
            <p className="m-0 align-self-center">Facebook</p>
        </div>
    )
}

export default FbButton
