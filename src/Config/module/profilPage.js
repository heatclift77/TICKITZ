import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom';

const PrivateRoute = ({component:Component, ...rest})=>{
    const token = localStorage.getItem('token');
    return  (
        <>
            <Route {...rest} render={(props)=> token !== null ? <Component {...props} /> : <Redirect to='/auth/signin'/>  }/>
        </>
    )
};

export default PrivateRoute