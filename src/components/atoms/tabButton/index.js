import React from 'react'

function TabButton({title, ...rest}) {
    return (
        <div>
            <h5 className="m-0 py-3 mx-3 mygray-color c-pointer" {...rest}>{title}</h5>
        </div>
    )
}

export default TabButton
