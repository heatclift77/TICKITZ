import React,{useEffect} from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { SignIn, SignUp, Home, ProfilPage, MovieDetails, 
    Payment ,OrderPage, ForgotPass, ConfirmNewPass, Admin, 
    TicketResult, NotFoundPage, Movies, ChangeFilm, EditMovie} from '../../pages';
import PrivateRoute from '../module/profilPage'
import AdminRoute from '../module/admin'
import AuthRoute from '../module/authRoute'
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
                url :  `${process.env.REACT_APP_SERVER}/v1/user/ValidasIToken`,
                data : {
                    token : token
                }
            })
            .then(response=>{
                if(response.data.status === 400){
                    localStorage.removeItem("token")
                    dispatch({
                        type : 'SET_STATUS',
                        isLogin : false,
                    })
                }
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
                {/* <AdminRoute path='/app/Add_Product' component={(props)=><Admin {...props} />} /> */}
                <Route path='/app/ListTayang/:code' component={MovieDetails} />
                <Route path='/app/admin/movieDetails/:id' component={EditMovie} />
                <Route path='/'>
                    <Admin />
                </Route>
                <Route path='/'>
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routers;
