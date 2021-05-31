import {React, useState} from 'react'
import { useHistory } from 'react-router-dom';
import { InputTypePass, Button as MyButton  } from '../../components/atoms';
import logo from '../../asets/tickitz_1.png';
import hero from '../../asets/image_1.jpg';
import swal from 'sweetalert'
import axios from 'axios'

function ConfirmNewPass() {
    const history = useHistory()
    const [newPass, setNewPass] = useState('')
    const [confirmPass, setConfirmNewPass] = useState('')
    const [newPassStyle, setNewPassStyle] = useState('my-input rounded w-100 py-3 px-3')
    const [confirmPassStyle, setConfirmPassStyle] = useState('my-input rounded w-100 py-3 px-3')
    const [buttonStatus, setButtonStatus] = useState(false)
    const [buttonStyle, setButtonStyle] = useState('py-3 px-4 w-100 rounded mybg-second text-white border-0 c-none')
    function handleChangeNewPass (e){
        setNewPass(e.target.value)
        if(e.target.value.length === 0){
            setNewPassStyle('my-input rounded w-100 py-3 px-3 border-danger')
            setButtonStyle('py-3 px-4 w-100 rounded mybg-second text-white border-0 c-none')
            setButtonStatus(false)
        }else{  
            setNewPassStyle('my-input rounded w-100 py-3 px-3')
            if(confirmPass === e.target.value){
                setConfirmPassStyle('my-input rounded w-100 py-3 px-3')
                setButtonStyle('my-btn py-3 px-4 w-100 rounded')
                setButtonStatus(true)
            }else{
                setConfirmPassStyle('my-input rounded w-100 py-3 px-3 border-danger')
                setButtonStyle('py-3 px-4 w-100 rounded mybg-second text-white border-0 c-none')
                setButtonStatus(false)
            }
        }
    }
    function handleChangeConfirmPass (e){
        setConfirmNewPass(e.target.value)
        if(newPass !== e.target.value){
            setConfirmPassStyle('my-input rounded w-100 py-3 px-3 border-danger')
            setButtonStyle('py-3 px-4 w-100 rounded mybg-second text-white border-0 c-none')
            setButtonStatus(false)
        }else{
            setConfirmPassStyle('my-input rounded w-100 py-3 px-3')
            setButtonStyle('my-btn py-3 px-4 w-100 rounded')
            setButtonStatus(true)
        }
    }
    function handleSubmit (e){
        axios({
            method : 'put',
            url : `${process.env.REACT_APP_SERVER}/user/confirmNewPass`,
            data : {
                newPass : newPass,
                email : localStorage.getItem('email')
            }
        })
        .then(response =>{
            localStorage.removeItem('email')
            swal('Success', response.data.message,'success')
            history.push('/signin')
        })
        .catch(err =>{
            swal('Oops', 'sepertinya server bermasalah' ,'error')
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
                                    < img src={hero} className='hero-size' alt="hero" />
                                    <div className="laminasi"></div>
                                </div>
                                <div className="position-absolute ml-5 mt-5 pl-5">
                                    <img src={logo} className="my-5" alt="tickitz" />
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
                                <div className="my-5">
                                    <InputTypePass label="New Password" placeholder="Write Your New Password" onChange={handleChangeNewPass} className={newPassStyle} />
                                    <InputTypePass label="Confirm Password" placeholder="Write again Your New Password" onChange={handleChangeConfirmPass} className={confirmPassStyle} />
                                    <MyButton value="Confirm Now" className={buttonStyle} onClick={(buttonStatus)?handleSubmit:function(){}} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfirmNewPass
