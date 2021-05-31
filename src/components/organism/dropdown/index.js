import React, { useState } from 'react';
import style from './dropdown.module.css';
import caret_down from '../../../asets/caret-down.png';
import map_icon from '../../../asets/map_icon.png';

function Dropdown({value, onClick, listKota}) {
    const [toggle, setToggle] = useState({
        state: false,
        value: style.hide
    })
    function toggleDropdown() {
        if (toggle.state) {
            setToggle({
                state: false,
                value: style.hide
            })
        } else {
            setToggle({
                state: true,
                value: style.show
            })
        }
    }
    return (
        <div className='position-relative'>
            <div className={style.dropdownWrapper} onClick={toggleDropdown}>
                <div className='py-3 px-4 d-flex justify-content-between'>
                    <div className='d-flex'>
                        <div className='mr-3'>
                            <img src={map_icon} className=''alt="/" />
                        </div>
                        <p className={'m-0 fw-600' + style.textColor}>{value}</p>
                    </div>
                    <div>
                        <img src={caret_down} alt="/" />
                    </div>
                </div>
            </div>
            <div className={'position-absolute bg-white border rounded z-1000 ' + toggle.value}>
                {listKota.map((value) => {
                    return <div className={'py-2 px-4 ' + style.dropdownItem} onClick={onClick}>
                        <p className='m-0'>{value}</p>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Dropdown
