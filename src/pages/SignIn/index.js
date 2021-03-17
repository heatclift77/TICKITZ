import React from 'react'
import { Input as MyInput, InputTypePass, Button as MyButton,
        GoogleButton, FbButton} from '../../components/atoms';
import {Link} from 'react-router-dom'
// image
import logo from '../../asets/lg_tickitz.png';
import hero from '../../asets/image_1.jpg';

const SignIn = () => {
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
                                <div className="center-absolute text-center">
                                    <img src={logo} className="my-4" />
                                    <div>
                                        <h3>Wait, Watch, WOW!</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-4">
                        <div className="row mt-5 mx-auto">
                            <div className="col-11">
                                <div className="mb-5">
                                    <h3 className="font-weight-bold">Sign In</h3>
                                    <p>Sign in with your data that you entered during your registration</p>
                                </div>
                                <div className="my-5">
                                    <MyInput label="Email" placeholder="Write Your Mail" />
                                    <InputTypePass label="password" placeholder="Write Your Password" />
                                </div>
                                <MyButton value="Sign In" />
                                <p className="text-center py-4">Forgot Your Password ? <Link to="Signup">Reset Now</Link></p>
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

export default SignIn
