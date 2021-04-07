import React from 'react'
import caret_down from '../../../asets/caret-down.png'
import calender from '../../../asets/calender.png'
import style from './inputDate.module.css'

function InputDate({value, ...rest}) {
    return (
        <div>
            <div className={'mybg-second myrounded-1 position-relative ' + style.width}>
                <div className={'position-absolute ' + style.native_position}>
                    <input type="date" className={style.opacity_0} {...rest}/>
                </div>
                <div className="d-flex justify-content-between p-3">
                    <div className='d-flex'>
                        <div className='mr-2'>
                            <img src={calender} />
                        </div>
                        <div className='mx-2'>
                            <p className='m-0'>{value}</p>
                        </div>
                    </div>
                    <div>
                        <img src={caret_down} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InputDate
