import React from 'react'
import image from '../../../asets/photo_profil.jpeg'

function ProfilImage() {
    return (
        <div className="profil-image shadow rounded-circle overflow-hidden d-flex justify-content-center align-self-center">
            <img src={image} className="w-136" />
        </div>
    )
}

export default ProfilImage
