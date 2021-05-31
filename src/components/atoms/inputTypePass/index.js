import {React, useState} from 'react'
import './inputTypePass.css'
import eye from '../../../asets/eye.png'

function InputTypePass({label, test, ...res}) {
    const [toggle, handleToggle] = useState('password')
    function togglePass (){
        (toggle === 'password') ? handleToggle('text') : handleToggle('password');
    }
    return (
            <div className="input-wrapper mt-3 position-relative">
                <p>{label}</p>
                <input type={toggle} className="my-input w-100 py-3 pl-3 pr-5 rounded" {...res} />
                <img src={eye} className="position-absolute eye-position" alt="password" onClick={togglePass} />
            </div>
    )
}

export default InputTypePass

