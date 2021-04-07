import { React, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// image
import tickitz from '../../../asets/tickitz.png';
import caret_down from '../../../asets/caret-down.png';
import search from '../../../asets/search.png';
import image_profil_default from '../../../asets/default.png';
// add on
import style from './navbar.module.css';
import { Link } from 'react-router-dom';
import axios from 'axios'

function Navbar() {
    const dispatch = useDispatch()
    const {user,  isLogin} = useSelector(state => state.user)
    const [buttonProfil, setButtonProfil] = useState('hide')
    const [buttonSignUp, setButtonSignUp] = useState('')
    useEffect(()=>{
        if(isLogin){
            setButtonProfil('')
            setButtonSignUp('hide')
        }else{
            setButtonProfil('hide')
            setButtonSignUp('')
        }
    }, [])
    const [show, setShow] = useState('col-12 col-lg-10 mynav-mob-position bg-white')
    const [siluet, setSiluet] = useState("hide-on-lg hide-on-xl siluet")
    const [status, setStatus] = useState(false)
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
    return (
        <nav className="row bg-white position-fixed fixed-top myshadow-for-nav">
            <div className="col-12">
                <div className="container my-4 my-lg-0">
                    <div className="row my-lg-4 d-flex justify-content-between">
                        <div className="col-1 col-lg-2">
                            <div className="my-auto">
                                <Link to='/home'>
                                    <img src={tickitz} className="logo-nav" />
                                </Link>
                            </div>
                        </div>
                        {/* siluet nav */}
                        <div className={siluet} onClick={handleNavMob}></div>
                        {/* <!-- navbar mobile --> */}
                        <div className={show}>
                            <div className="d-flex flex-sm-column-reverse flex-lg-row">
                                <div className="hide-on-lg hide-on-xl mx-auto py-5 position-relative w-100 px-5 myline-nav">
                                    <p className="mb-0 mygray-color text-center">© 2020 Tickitz. All Rights Reserved.</p>
                                </div>
                                <ul class="d-flex flex-column flex-lg-row mb-0 my-auto pl-0">
                                    <li className="mr-lg-4 py-3 py-lg-0 myline-nav text-center nav-link"><a className="color-third fw-600">Movies</a></li>
                                    <li className="mr-lg-4 py-3 py-lg-0 myline-nav text-center nav-link"><a className="color-third fw-600">Cinemas</a></li>
                                    <li className="mr-lg-4 py-3 py-lg-0 myline-nav text-center nav-link"><a className="color-third fw-600">Buy Ticket</a></li>
                                </ul>
                                <ul className="d-flex mb-0 justify-content-lg-between ml-lg-auto pl-0 py-3 py-lg-0 my-lg-0 px-auto px-lg-0 myline-nav nav-link">
                                    <li className="my-auto w-sm-100 text-sm-center text-lg-left cover">
                                        <a className="color-third fw-600">Location</a>
                                        <img src={caret_down} className="mx-2" />
                                    </li>
                                    <li className="my-auto mx-lg-5 cover hide-on-sm hide-on-md">
                                        <img src={search} className="" />
                                    </li>
                                    <li className="my-auto hide-on-sm hide-on-md position-relative">
                                        <div className={buttonSignUp}>
                                            <Link to="/Signup">
                                                <button className="mybtn mybtn-active myrounded-1 w-100 ">Sign Up</button>
                                            </Link>
                                        </div>
                                        <div className={buttonProfil}>
                                            <div className={style.image_profil}>
                                                <img src={(user.img_profil == null)?image_profil_default:user.img_profil} className={style.image_profil} />
                                                <div className={style.dropdown_profil}>
                                                    <Link to="/profil_page">
                                                        <li className="py-2 px-4 border-bottom">
                                                            <p className="m-0">User Profil</p>
                                                        </li>
                                                    </Link>
                                                    <Link to="/signin">
                                                        <li className="py-2 px-4" onClick={handleLogOut}>
                                                            <p className="m-0">LogOut</p>
                                                        </li>
                                                    </Link> 
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="hide-on-lg hide-on-xl mx-auto my-5 position-relative w-100 px-5">
                                    <input type="text" className="myinput myrounded-1 pl-5" placeholder="Search..." />
                                    <img src={search} class="position-absolute nav_search_icon_position c-pointer" />
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
