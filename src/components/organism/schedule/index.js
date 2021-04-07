import React from 'react'
import style from './schedule.module.css'

function Schedule({value, ...rest}) {
    return (
        <div className="col-3 my-2">
            <div className={'rounded c-pointer overflow-hidden position-relative ' + style.wrapper}>
                <div className='py-2 px-2'>
                    <div className='mt-auto'>
                        <p className='m-0 fs-08'>{value}</p>
                    </div>
                </div>
                <div className={'w-100 h-100 py-2 px-2 text-center ' + style.siluet} {...rest}>
                    <p className='m-0 fw-600'>x</p>
                </div>
            </div>
        </div>
    )
}

export default Schedule
