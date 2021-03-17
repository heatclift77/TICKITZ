import React from 'react'
import {DotButton, ProfilImage} from '../../atoms'

function UserCard({FullName}) {
    return (
        <div className="bg-white rounded border py-5 px-4">
            <div className="d-flex justify-content-between">
                <p>INFO</p>
                <DotButton />
            </div>
            <div className="d-flex justify-content-center">
            <ProfilImage />
            </div>
            <div className="text-center mt-5">
                <h2 className="fw-600">{FullName}</h2>
                <p className="mygray-color m-0">Moviegoers</p>
            </div>
        </div>
    )
}

export default UserCard
