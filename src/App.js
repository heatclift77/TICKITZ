import React from 'react'
import { Routers } from './Config'
import { Provider } from 'react-redux'
import store from './Config/redux'
import './App.css'

const App = () => {
    return (
        <Provider store={store}>
            <Routers />
        </Provider>
    )
}

export default App
