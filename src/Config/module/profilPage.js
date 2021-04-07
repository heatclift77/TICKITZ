import React from 'react'
import {Redirect, Route} from 'react-router-dom';

const PrivateRoute = ({component:Component, ...rest})=>{
    const token = localStorage.getItem('token');
    return  (
        <Route {...rest} render={(props)=>
            token !== null ? <Component {...props} /> : <Redirect to='/signin'/>  
        }/> 
    )
};

export default PrivateRoute