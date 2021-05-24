import React from 'react'

function ProfilImage({src}) {
    return (
        <>
            <div className="profil-image shadow rounded-circle overflow-hidden d-flex justify-content-center align-self-center position-relative">
                <img src={src} className="w-136" />
            </div>
        </>
    )
}

export default ProfilImage
