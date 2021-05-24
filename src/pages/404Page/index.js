import React from 'react'

export default function NotFoundPage() {
    return (
        <div className="container" style={{minHeight:"100vh", width:"100vw", position:"relative"}}>
            <div className="position-absolute" style={{top:"50%", left:"50%", transform:"translate(-50%, -50%)"}}>
                <h3 className="text-danger text-center font-weight-bold">404</h3>
                <p className="text-center">Page Not Found!!!</p>
            </div>
        </div>
    )
}