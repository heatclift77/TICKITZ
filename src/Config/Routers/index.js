import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { SignIn, SignUp, Home, ProfilPage, MovieDetails, Payment ,OrderPage} from '../../pages';

const Routers = () => {
    return (
        <Router>
            <Switch>
                <Route path='/SignIn'>
                    <SignIn />
                </Route>
                <Route path='/SignUp'>
                    <SignUp />
                </Route>
                <Route path='/Home'>
                    <Home />
                </Route>
                <Route path='/profil_page'>
                    <ProfilPage />
                </Route>
                <Route path='/order_page'>
                    <OrderPage />
                </Route>
                <Route path='/movie_details/:id' component={MovieDetails}>
                    <MovieDetails />
                </Route>
                <Route path='/payment'>
                    <Payment />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routers;
