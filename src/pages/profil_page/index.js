import React, { Component } from 'react'
import {UserCard, FormProfil, Footer, Navbar} from '../../components/templates'
import axios from 'axios'

export class ProfilPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            dataUser : [],
            dataTrans : [],
            id : '7fcd5929-0902-428c-aa62-3af701c33c4c',
            test : ''
        }
    }
    componentDidMount(){
        axios.get(process.env.REACT_APP_SERVER + `/user/${this.state.id}`)
        .then(res =>{
            this.setState({dataUser:res.data[0]}) 
        })
    }
    render() {
        return (
            <div className="mybg-second">
                <div className="container">
                    <Navbar />
                    <div className="row mt-7 pt-5">
                        <div className="col-12 col-lg-3">
                            <UserCard FullName={this.state.dataUser.username} />
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
}

export default ProfilPage
