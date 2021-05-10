import React,{useEffect} from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { SignIn, SignUp, Home, ProfilPage, MovieDetails, Payment ,OrderPage, ForgotPass, ConfirmNewPass, Admin} from '../../pages';
import {Navbar, Footer} from '../../components/templates'
import PrivateRoute from '../module/profilPage'
import AdminRoute from '../module/admin'
import axios from 'axios'

const Routers = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        const token = localStorage.getItem('token')
        if(token == null){
            dispatch({
                type : 'SET_STATUS',
                isLogin : false,
            })
            // token kosong
        }else{
            axios({
                method : 'POST',
                url :  `${process.env.REACT_APP_SERVER}/user/ValidasIToken`,
                data : {
                    token : token
                }
            })
            .then(response=>{
                if(response.data.status == '400'){
                    localStorage.removeItem('token')
                    // token invalid
                }else if(response.data.status == '200'){
                    // token valid
                    const user = response.data.data[0]
                    dispatch({
                        type : 'SET_PROFIL_USER',
                        payload : {
                            id_user : response.data.data[0].id_user,
                            email : response.data.data[0].email,
                            password : response.data.data[0].password,
                            firstname : response.data.data[0].firstName,
                            lastname : response.data.data[0].lastName,
                            telephone : response.data.data[0].telephone,
                            username : response.data.data[0].username,
                            img : response.data.data[0].img_profil,
                            role : response.data.data[0].role
                        }
                    })
                    dispatch({
                        type : 'SET_STATUS',
                        isLogin : true,
                    })
                }
            })
            .catch(err=>{
                console.log(err);
            })
        }
    })
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path='/SignIn'>
                    <SignIn />
                </Route>
                <Route path='/SignUp'>
                    <SignUp />
                </Route>
                <Route path='/forgotpass'>
                    <ForgotPass />
                </Route>
                <Route path='/ConfirmNewPass'>
                    <ConfirmNewPass />
                </Route>
                <Route path='/Home'>
                    <Home />
                </Route>
                <PrivateRoute  path='/order_page' component={(props)=><OrderPage {...props} />} />
                <PrivateRoute path='/profil_page' component={(props)=><ProfilPage {...props}/>} />
                <Route path='/ListTayang/:code' component={MovieDetails} />
                <Route path='/payment'>
                    <Payment />
                </Route>
                <AdminRoute path='/Add_Product' component={(props)=><Admin {...props} />} />
                <Route path='/'>
                    <Home />
                </Route>
            </Switch>
            <Footer />
        </Router>
    )
}

export default Routers;
