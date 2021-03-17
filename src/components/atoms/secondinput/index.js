import React from 'react'

function SecondInput({label, ...rest}) {
    return (
        <div className="mt-3">
            <p className="">{label}</p>
            <div className="my-input rounded">
                <div className="d-flex my-2">
                    <p className="my-auto px-3 mygray-color">+62</p>
                    <input className="
                    border-left 
                    border-top-0 
                    border-right-0
                    border-bottom-0
                    bg-transparent w-100 py-2 px-3
                    " type='Number' {...rest} />
                </div>
            </div>
        </div>
    )
}

export default SecondInput
