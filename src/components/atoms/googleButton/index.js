import React from 'react'
import gg from '../../../asets/google.png'

function GoogleButton() {
    return (
        <div className="d-flex p-3 border myrounded-1 shadow c-pointer mx-3">
            <div className="mr-3 align-self-center">
                <img src={gg} className="w-100" alt="google" />
            </div>
            <p className="m-0 align-self-center">Google</p>
        </div>
    )
}

export default GoogleButton
