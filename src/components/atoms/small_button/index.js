import React from 'react'

const Small_Button = ({value, ...rest}) => {
    return (
        <div className="mt-4 mx-2">
            <button className="my-btn my-btn-primary rounded py-2 px-4 w-100 fw-400 fs-08" {...rest}>{value}</button>
        </div>
    )
}

export default Small_Button