import { React, Component} from 'react';
import { Input as MyInput, InputTypePass, Button as MyButton ,
    GoogleButton, FbButton } from '../../components/atoms';
import {Link} from 'react-router-dom'
// ----- image -----
import logo from '../../asets/tickitz_1.png';
import hero from '../../asets/image_1.jpg';
// ---------- ------
import axios from 'axios'
import './SignUp.css';

export class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email : '',
            password : ''
        };
    }
    handleEmailChange = (e) => {
        this.setState({
            email : e.target.value         
        })
    }
    handlePassChange = (e) => {
        this.setState({
            password : e.target.value
        })
    }
    Submit = () => {
        const email = this.state.email
        const pass = this.state.password
        console.log(email + ' ' + pass);
        axios({
            method: 'post',
            headers: { 'content-type': 'application/json' },
            url: `${process.env.REACT_APP_SERVER}/user/addUser`,
            data: {
                email: email,
                pass: pass
            }
        })
        .then(res=> console.log(res))
    } 
    render() {
        return (
            <div class="container-fluid">
                <div class="row vh-100">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-8 overflow-hidden d-none d-lg-block">
                        <div className="row position-relative">
                            <div class="col-11 mx-auto text-white">
                                <div className="position-absolute top-0 left-0">
                                    < img src={hero} className='hero-size' />
                                    <div className="laminasi"></div>
                                </div>
                                <div className="position-absolute ml-5 mt-5 pl-5">
                                    <img src={logo} className="my-5" />
                                    <div>
                                        <h1>Lets build your account</h1>
                                        <p>To be a loyal moviegoer and access all of features, your details are required.</p>
                                    </div>
                                    <div className="mt-5">
                                        <div className="d-flex my-4">
                                            <div className="py-2 px-3 border border-white bg-white rounded-circle">1</div>
                                            <p className="align-self-center pl-3 my-auto color-transparent">Fill your additional details</p>
                                        </div>
                                        <div className="d-flex my-4">
                                            <div className="py-2 px-3 border border-white bg-transparent rounded-circle">2</div>
                                            <p className="align-self-center pl-3 my-auto">Activate your account</p>
                                        </div>
                                        <div className="d-flex my-4">
                                            <div className="py-2 px-3 border border-white bg-transparent rounded-circle">3</div>
                                            <p className="align-self-center pl-3 my-auto">Done</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-4">
                        <div className="row">
                            <div className="col-11 mt-7 mx-auto">
                                <h2 className="py-3 fw-600">Fill your additional details</h2>
                                <MyInput label="Email" placeholder="Write Your Mail" onChange={this.handleEmailChange} />
                                <InputTypePass label="password" placeholder="Write Your Password" onChange={this.handlePassChange} />
                                <div className="d-flex my-4">
                                    <input type="checkbox" className="bg-black mr-2" className="my-auto mr-3" />
                                    <p className="m-0">I agree to terms & conditions</p>
                                </div>
                                <MyButton value="Join for free now" onClick={this.Submit} />
                                <p className="text-center py-4">Do you already have an account ? <Link to="SignIn">Log in</Link></p>
                                <div className="d-flex justify-content-center">
                                    <FbButton />
                                    <GoogleButton />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUp

