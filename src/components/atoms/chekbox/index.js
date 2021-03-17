import React from 'react'
// import './chekbox.css'

function Checkbox({...rest}) {
    return (
        <div class="container">
            <input type="checkbox" {...rest} />
            <span className="checkmark" {...rest}></span>
        </div>
    )
}

export default Checkbox
