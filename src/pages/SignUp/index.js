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
import swal from 'sweetalert';

export class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email : '',
            password : '',
            checked : false,
            emailDanger : 'my-input rounded w-100 py-3 px-3',
            passDanger : 'my-input rounded w-100 py-3 px-3',
            button : 'py-3 px-4 w-100 rounded mybg-second text-white border-0 c-none',
            btnStatus : false,
            Submit : (e) => {
                const email = this.state.email
                const pass = this.state.password
                axios({
                    method: 'post',
                    headers: { 'content-type': 'application/json' },
                    url: `${process.env.REACT_APP_SERVER}/user/register`,
                    data: {
                        email: email,
                        pass: pass
                    }
                })
                .then(res=> {
                    swal("success", "pendaftaran Berhasil, silahkan cek email anda", "success")
                })
                .catch(err=> {
                    this.setState({messageDanger : 'text-danger m-0 py-2'});
                })
            },
            messageDanger: 'hide'
        }
    }
    handleEmailChange = (e) => {
        this.setState({
            email : e.target.value,
            emailDanger : 'my-input rounded w-100 py-3 px-3',
            messageDanger : 'hide'
        })
        if(e.target.value.length == 0){
            this.setState({
                emailDanger : 'my-input rounded w-100 py-3 px-3 border-danger',
                button : "py-3 px-4 w-100 rounded mybg-second text-white border-0 c-none",
                btnStatus : false
            })
        }else{
            if(this.state.checked && this.state.password.length != 0){
                this.setState({
                    button : "my-btn py-3 px-4 w-100 rounded",
                    btnStatus : true
                })
            }
        }
    }
    handlePassChange = (e) => {
        this.setState({
            password : e.target.value,
            passDanger : 'my-input rounded w-100 py-3 px-3' 
        })
        if(e.target.value.length == 0){
            this.setState({
                passDanger : 'my-input rounded w-100 py-3 px-3 border-danger',
                button : "py-3 px-4 w-100 rounded mybg-second text-white border-0 c-none",
                btnStatus : false
            })
        }else{
            if(this.state.checked && this.state.email.length != 0){
                this.setState({
                    button : "my-btn py-3 px-4 w-100 rounded",
                    btnStatus : true
                })
            }
        }
    }
    handleCheck = (e) =>{
        if(this.state.checked){
            this.setState({
                checked : false,
                button : "py-3 px-4 w-100 rounded mybg-second text-white border-0 c-none",
                btnStatus : false
            })
        }else{
            this.setState({checked : true})
            if(this.state.email.length == 0 && this.state.password.length == 0){
                this.setState({
                    emailDanger : 'my-input rounded w-100 py-3 px-3 border-danger',
                    passDanger : 'my-input rounded w-100 py-3 px-3 border-danger'
                })
            }else{
                if(this.state.email.length == 0){
                    this.setState({emailDanger : 'my-input rounded w-100 py-3 px-3 border-danger'})
                }else{
                    if(this.state.password == 0){
                        this.setState({passDanger : 'my-input rounded w-100 py-3 px-3 border-danger'})
                    }else{
                        this.setState({
                            button : "my-btn py-3 px-4 w-100 rounded",
                            btnStatus : true
                        })
                    }
                }
            }
        }
    }
    componentDidMount = ()=>{
        const mapStateToProps = state => ({
            status: state.user.isLogin
        });
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
                                <MyInput label="Email" className={this.state.emailDanger} placeholder="Write Your Mail" onChange={this.handleEmailChange} />
                                <p className={this.state.messageDanger}>Email Sudah Terdaftar !!!</p>
                                <InputTypePass label="password" className={this.state.passDanger} placeholder="Write Your Password" onChange={this.handlePassChange} />
                                <div className="d-flex my-4">
                                    <input type="checkbox" className="bg-black mr-2" className="my-auto mr-3" checked={this.state.checked} onClick={this.handleCheck} />
                                    <p className='my-auto'>I agree to terms & conditions</p>
                                </div>
                                <MyButton status='false' value="Join for free now" className={this.state.button} onClick={
                                    ()=> (this.state.btnStatus) ? this.state.Submit() : function(){}
                                    } />
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

