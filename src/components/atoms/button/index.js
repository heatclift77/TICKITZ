import React from 'react'
import './button.css';

const Button = ({value, onClick}) => {
    return (
        <div className="mt-4">
            <button className="my-btn my-btn-primary py-3 px-4 w-100 rounded" onClick={onClick}>{value}</button>
        </div>
    )
}

export default Button