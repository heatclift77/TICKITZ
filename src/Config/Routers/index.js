import React,{useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { SignIn, SignUp, Home, ProfilPage, MovieDetails,
    Payment ,OrderPage, ForgotPass, ConfirmNewPass, 
    TicketResult, Movies, ChangeFilm, EditMovie} from '../../pages';
import PrivateRoute from '../module/profilPage';
import AuthRoute from '../module/authRoute';
import axios from 'axios';

const Routers = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        const token = localStorage.getItem('token')
        if(token === null){
            dispatch({
                type : 'SET_STATUS',
                isLogin : false,
            });
            // token kosong
        }else{
            axios({
                method : 'POST',
                url :  `${process.env.REACT_APP_SERVER}/v1/user/ValidasIToken`,
                data : {
                    token : token
                }
            })
            .then((response)=>{
                dispatch({
                    type : 'SET_PROFIL_USER',
                    payload : response.data.data[0]
                })
            })
            .catch(err=>{
                console.log(err);
            })
        }
    })
    return (
        <Router>
            <Switch>
                <AuthRoute  path='/auth/SignIn' component={(props)=><SignIn {...props} />} />
                <AuthRoute  path='/auth/SignUp' component={(props)=><SignUp {...props} />} />
                <AuthRoute  path='/auth/forgotpass' component={(props)=><ForgotPass {...props} />} />
                <AuthRoute  path='/auth/ConfirmNewPass' component={(props)=><ConfirmNewPass {...props} />} />
                <Route path='/app/Home'>
                    <Home />
                </Route>
                <Route path='/app/movies'>
                    <Movies />
                </Route>
                <PrivateRoute  path='/app/order_page' component={(props)=><OrderPage {...props} />} />
                <PrivateRoute  path='/app/changeFilm' component={(props)=><ChangeFilm {...props} />} />
                <PrivateRoute path='/app/profil_page' component={(props)=><ProfilPage {...props}/>} />
                <PrivateRoute path='/app/payment' component={(props)=><Payment {...props}/>} />
                <PrivateRoute path='/app/user/ticket/:id' component={(props)=><TicketResult {...props}/>} />
                <Route path='/app/ListTayang/:code' component={MovieDetails} />
                <Route path='/app/admin/movieDetails/:id' component={EditMovie} />
                <Route path='/'>
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routers;
