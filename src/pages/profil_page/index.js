import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { UserCard, FormProfil, Footer, Navbar } from '../../components/templates'

function ProfilPage() {
    return (
        <div className="mybg-second">
        <div className="container">
            <Navbar />
            <div className="row mt-7 pt-5">
                <div className="col-12 col-lg-3">
                    <UserCard />
                </div>
                <div className="col-12 col-lg-9 px-4 rounded">
                    <FormProfil />
                </div>
            </div>
            <Footer />
        </div>
    </div>
    )
}

export default ProfilPage

