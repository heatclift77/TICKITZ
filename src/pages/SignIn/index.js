import { React, useState } from 'react';
import { Link, useHistory, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
// image
import logo from '../../asets/lg_tickitz.png';
import hero from '../../asets/image_1.jpg';
import axios from 'axios';
// add on
import { Input as MyInput, InputTypePass, Button as MyButton} from '../../components/atoms';

const SignIn = () => {
    const dispatch = useDispatch();
    let {isLogin} = useSelector(state=>state.user)
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [buttonStyle, setButtonStyle] = useState('py-3 px-4 w-100 rounded mybg-second text-white border-0 c-none');
    const [inputStyle, setInputStyle] = useState('my-input rounded w-100 py-3 px-3');
    const [inputPassStyle, setInputPassStyle] = useState('my-input rounded w-100 py-3 px-3');
    const [buttonStatus, setButtonStatus] = useState(false);
    
    function handleEmailChange(e){
        setEmail(e.target.value)
        if(e.target.value.length === 0){
            setInputStyle('my-input rounded w-100 py-3 px-3 border-danger')
            setButtonStyle('py-3 px-4 w-100 rounded mybg-second text-white border-0 c-none') /**button mati */
            setButtonStatus(false)
        }else{
            setInputStyle('my-input rounded w-100 py-3 px-3')
            if(pass.length === 0){
                setInputPassStyle('my-input rounded w-100 py-3 px-3 border-danger')
            }else{
                setButtonStyle('my-btn py-3 px-4 w-100 rounded') /**button hidup */
                setButtonStatus(true)
            }
        }
    }
    function handlePassChange(e){
        setPass(e.target.value)
        if(e.target.value.length === 0){
            setInputPassStyle('my-input rounded w-100 py-3 px-3 border-danger')
            setButtonStyle('py-3 px-4 w-100 rounded mybg-second text-white border-0 c-none') /**button mati */
            setButtonStatus(false)
        }else{
            setInputPassStyle('my-input rounded w-100 py-3 px-3')
            if(email.length === 0){
                setInputStyle('my-input rounded w-100 py-3 px-3 border-danger') 
            }else{
                setButtonStyle('my-btn py-3 px-4 w-100 rounded') /**button hidup */
                setButtonStatus(true)
            }
        }
    }
    function handleSubmit(e){
        const url = `${process.env.REACT_APP_SERVER}/v1/user/login`
        axios({
            method : 'POST',
            url : url,
            data : {
                email : email,
                password : pass
            }
        }).then(response =>{
            dispatch({
                type : 'SET_PROFIL_USER',
                payload : {
                    id_user : response.data.data.id_user,
                    email : response.data.data.email,
                    password : response.data.data.password,
                    username : response.data.data.username,
                    firstName : response.data.data.firstName,
                    lastName : response.data.data.lastName,
                    telephone : response.data.data.telephone,
                    img : response.data.data.img_profil,
                    role : response.data.data.role
                }
            })
            dispatch({
                type : 'SET_STATUS',
                isLogin : true
            })
            localStorage.setItem('token', response.data.token)
            history.push('/app/home')
        }).catch(err => {
            // swal('Oops', err.response.data.message, 'error')
            console.log(err);
        })
    }
    if(isLogin){
        return <Redirect to='/app/Home'/>
    }else{
        
    }
    return (
        <div class="container-fluid">
                <div class="row vh-100">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-8 overflow-hidden d-none d-lg-block">
                        <div className="row position-relative">
                            <div class="col-11 mx-auto text-white">
                                <div className="position-absolute top-0 left-0">
                                    < img src={hero} className='hero-size' alt="hero" />
                                    <div className="laminasi"></div>
                                </div>
                                <div className="center-absolute text-center">
                                    <img src={logo} className="my-4" alt="tickitz" />
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
                                    <h2 className="font-weight-bold">Sign In</h2>
                                    <p>Sign in with your data that you entered during your registration</p>
                                </div>
                                <div className="my-5">
                                    <MyInput label="Email" placeholder="Write Your Mail" onChange={handleEmailChange} className={inputStyle} />
                                    <InputTypePass label="password" placeholder="Write Your Password" onChange={handlePassChange} className={inputPassStyle} />
                                </div>
                                    <MyButton value="Sign In" disabled={buttonStatus ? false : true} onClick={handleSubmit} className={buttonStyle} />
                                <p className="text-center py-4">Forgot Your Password ? <Link to="forgotpass">Reset Now</Link></p>
                                <div className="w-100">
                                    <button className="w-100 text-white border-0 rounded py-3" style={{background:"#ebdb34"}} onClick={()=>{history.push("/auth/signup")}}>Sign Up</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default SignIn
