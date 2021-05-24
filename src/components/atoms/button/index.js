import React from 'react'
import './button.css';

const Button = ({value, onClick, status, ...rest}) => {
    return (
        <div className="mt-4">
            <button className="my-btn py-3 px-4 w-100 rounded" status={status}onClick={onClick} {...rest}>{value}</button>
        </div>
    )
}

export default Button