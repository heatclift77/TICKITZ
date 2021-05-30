import { React, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import searchMovie from '../../../Config/redux/action/movie'
// image
import tickitz from '../../../asets/tickitz.png';
import caret_down from '../../../asets/caret-down.png';
import search from '../../../asets/search.png';
import image_profil_default from '../../../asets/default.png';
// add on
import style from './navbar.module.css';
import { Link, useP, useHistory } from 'react-router-dom';
import axios from 'axios'

function Navbar() {
    const dispatch = useDispatch()
    const history = useHistory()
    const [key, setKey] = useState("")
    const {user,  isLogin} = useSelector(state => state.user)
    const [buttonProfil, setButtonProfil] = useState('hide')
    const [buttonSignUp, setButtonSignUp] = useState('')
    const [show, setShow] = useState('col-12 col-lg-10 mynav-mob-position bg-white')
    const [siluet, setSiluet] = useState("hide-on-lg hide-on-xl siluet")
    const [status, setStatus] = useState(false)
    const [profilDropToggle, setProfilDropTogle] = useState(false)
    const [avatar, setAvatar] = useState("")
    function handleNavMob(){
        if(!status){
            setShow('col-12 col-lg-10 mynav-mob-position bg-white show')
            setSiluet('hide-on-lg hide-on-xl siluet siluet-show')
            setStatus(true)
        }else{
            setShow('col-12 col-lg-10 mynav-mob-position bg-white')
            setSiluet('hide-on-lg hide-on-xl siluet')
            setStatus(false)
        }
    }
    function handleLogOut(e){
        localStorage.removeItem('token')
        dispatch({
            type : 'SET_STATUS',
            isLogin : false
        })
    };
    const searchFunction = () => {
        dispatch(searchMovie(key))
        history.push("/app/movies")
    }
    useEffect(()=>{
        setAvatar(user.img)
    },[user])
    return (
        <nav className="row bg-white position-fixed fixed-top shadow">
            <div className="col-12">
                <div className="container my-4 my-lg-0">
                    <div className="row d-flex justify-content-between">
                        <div className="col-1 col-lg-2 my-auto">
                            <div className="my-auto">
                                <Link to='/app/home'>
                                    <img src={tickitz} className="logo-nav" />
                                </Link>
                            </div>
                        </div>
                        {/* siluet nav */}
                        <div className={siluet} onClick={handleNavMob}></div>
                        {/* <!-- navbar mobile --> */}
                        <div className={show}>
                            <div className="d-flex flex-column-reverse flex-lg-row">
                                <div className="hide-on-lg hide-on-xl mx-auto py-5 position-relative w-100 px-5 myline-nav">
                                    <p className="mb-0 mygray-color text-center">© 2020 Tickitz. All Rights Reserved.</p>
                                </div>
                                <ul class="d-flex flex-column flex-lg-row mb-0 my-auto pl-0 my-auto">
                                    <li className="mr-lg-4 py-3 py-lg-0 myline-nav text-center nav-link"><a className="color-third fw-600">Movies</a></li>
                                    <li className="mr-lg-4 py-3 py-lg-0 myline-nav text-center nav-link"><a className="color-third fw-600">Cinemas</a></li>
                                    <li className="mr-lg-4 py-3 py-lg-0 myline-nav text-center nav-link"><a className="color-third fw-600">Buy Ticket</a></li>
                                    <li className={isLogin ? "mr-lg-4 py-3 py-lg-0 myline-nav text-center nav-link hide-on-lg hide-on-xl" : "hide"}><Link to="/app/profil_page" className="color-third fw-600">Profile</Link></li>
                                    <li className={isLogin ? "mr-lg-4 py-3 py-lg-0 myline-nav text-center nav-link hide-on-lg hide-on-xl" : "hide"}><Link to="/auth/signin" className="color-third fw-600" onClick={()=>{
                                        dispatch({type:"LOGOUT"})
                                        localStorage.removeItem("token")
                                    }} >Logout</Link></li>
                                </ul>
                                <ul className="d-flex mb-0 justify-content-lg-between ml-lg-auto pl-0 py-3 py-lg-0 my-lg-0 px-auto px-lg-0 myline-nav nav-link">
                                    <li className="my-auto w-sm-100 text-sm-center text-lg-left cover mx-3">
                                        <div className="d-flex justify-content-between rounded-pill p-2" style={{background:"#DEDEDE"}}>
                                            <input placeholder="Cari film..." className="bg-transparent border-0 px-3" style={{outline:"none"}} onChange={(e)=>{setKey(e.target.value)}} onKeyDown={(e)=>{
                                                if(e.key == "Enter"){
                                                    searchFunction()
                                                }
                                            }} />
                                            <img src={search} className="pr-2 my-auto" style={{width:"28px", height:"auto"}} onClick={searchFunction} />
                                        </div>
                                    </li>
                                    <li className="my-auto hide-on-sm hide-on-md position-relative ml-3">
                                        <div className={isLogin ? "hide" : ""}>
                                            <Link to="/auth/Signup">
                                                <button className="mybtn mybtn-active myrounded-1 w-100 ">Sign Up</button>
                                            </Link>
                                        </div>
                                        <div className={isLogin ? "" : "hide"}>
                                            <div className="rounded-circle d-flex justify-content-center overflow-hidden">
                                                <img src={avatar} className={style.image_profil} onClick={()=>{
                                                    if(profilDropToggle){
                                                        setProfilDropTogle(false)
                                                    }else{
                                                        setProfilDropTogle(true)
                                                    }
                                                }} />
                                                <div className={profilDropToggle ? "" : "hide"}>
                                                    <div className="position-absolute rounded bg-white shadow" style={{bottom:"-180%", right:0, minWidth:"200px"}}>
                                                        <div className="py-2 px-3 border-bottom link-hover" onClick={()=>{
                                                            history.push("/app/profil_page")
                                                        }}>
                                                            <p className="m-0">Profile</p>
                                                        </div>
                                                        <Link to="/auth/signin" onClick={()=>{
                                                            dispatch({type:"LOGOUT"})
                                                            localStorage.removeItem("token")
                                                        }}>
                                                            <div className="py-2 px-3 link-hover rounded">
                                                                <p className="m-0" >Logout</p>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                {/* <div className="hide-on-lg hide-on-xl mx-auto my-5 position-relative w-100 px-5">
                                    <input type="text" className="myinput myrounded-1 pl-5" placeholder="Search..." />
                                    <img src={search} class="position-absolute nav_search_icon_position c-pointer" />
                                </div> */}
                                <div style={{minHeight:"120px"}}>

                                </div>
                            </div>
                        </div>
                        {/* <!--  --> */}
                        <div className="col-1 hide-on-lg hide-on-xl">
                            <div className=" d-flex justify-content-end">
                                <div className="hamburger" onClick={handleNavMob}>
                                    <div className="line1"></div>
                                    <div className="line2"></div>
                                    <div className="line3"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
