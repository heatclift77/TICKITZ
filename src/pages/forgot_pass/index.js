import {React, useState} from 'react';
import { useHistory } from 'react-router-dom';
import { Input as MyInput, Button as MyButton  } from '../../components/atoms';
import logo from '../../asets/tickitz_1.png';
import hero from '../../asets/image_1.jpg';
import swal from 'sweetalert'
import axios from 'axios'

function ForgotPass() {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [inputStyle, setInputStyle] = useState('my-input rounded w-100 py-3 px-3')
    const [buttonStatus, setButtonStatus] = useState(false)
    const [buttonStyle, setButtonStyle] = useState('py-3 px-4 w-100 rounded mybg-second text-white border-0 c-none')
    function handleChange (e){
        setEmail(e.target.value)
        if(e.target.value.length == 0){
            setInputStyle('my-input rounded w-100 py-3 px-3 border-danger')
            setButtonStyle('py-3 px-4 w-100 rounded mybg-second text-white border-0 c-none')
            setButtonStatus(false)
        }else{
            setInputStyle('my-input rounded w-100 py-3 px-3')
            setButtonStyle('my-btn py-3 px-4 w-100 rounded')
            setButtonStatus(true)
        }
    }
    function handleSubmit (e){
        axios({
            method : 'post',
            url : `${process.env.REACT_APP_SERVER}/user/forgotpass`,
            data : {
                email : email
            }
        })
        .then(response =>{
            localStorage.setItem("email",email);
            history.push('/ConfirmNewPass');
        })
        .catch(err =>{
            if(err.message == 'Network Error'){
                swal('error', 'Sepertinya Server Bermasalah' ,'error');
            }else if(err.response.data.status == 400){
                swal('error', err.response.data.message ,'error');
            }
        })
    }
    return (
        <div>
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
                                        <h1>Lets reset your password</h1>
                                        <p className='fw-400 fs-12'>To be able to use your account again, please
                                        complete the following steps.</p>
                                    </div>
                                    <div className="mt-5">
                                        <div className="d-flex my-4">
                                            <div className="py-2 px-3 border border-white bg-white rounded-circle">1</div>
                                            <p className="align-self-center pl-3 my-auto color-transparent">Fill your Complete Email</p>
                                        </div>
                                        <div className="d-flex my-4">
                                            <div className="py-2 px-3 border border-white bg-transparent rounded-circle">2</div>
                                            <p className="align-self-center pl-3 my-auto">Activate your Email</p>
                                        </div>
                                        <div className="d-flex my-4">
                                            <div className="py-2 px-3 border border-white bg-transparent rounded-circle">3</div>
                                            <p className="align-self-center pl-3 my-auto">Enter Your new Password</p>
                                        </div>
                                        <div className="d-flex my-4">
                                            <div className="py-2 px-3 border border-white bg-transparent rounded-circle">4</div>
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
                                <h2 className="py-3 fw-600 m-0">Fill Your Complete Email</h2>
                                <p className="mygray-color">we'll send a link to your email shortly</p>
                                <div className="my-5">
                                    <MyInput label="Email" placeholder="Write Your Mail" className={inputStyle} onChange={handleChange} />
                                    <MyButton value="Activate Now" className={buttonStyle} onClick={(buttonStatus)?handleSubmit:function(){}} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPass
