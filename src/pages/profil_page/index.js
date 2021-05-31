import React from 'react'
import { UserCard, FormProfil, Footer, Navbar } from '../../components/templates'

function ProfilPage() {
    return (
        <>
            <Navbar />
            <div className="mybg-second">
                <div className="container">
                    <div className="row mt-7 pt-5">
                        <div className="col-12 col-lg-3 mb-5">
                            <UserCard />
                        </div>
                        <div className="col-12 col-lg-9 px-4 rounded">
                            <FormProfil />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ProfilPage

