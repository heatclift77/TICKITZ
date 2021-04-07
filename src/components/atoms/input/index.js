import React from 'react'

const Input = ({label, ...res}) => {
    return (
        <div className="input-wrapper">
            <p>{label}</p>
            <input className="my-input rounded w-100 py-3 px-3" {...res} />
        </div>
    )
}

export default Input
