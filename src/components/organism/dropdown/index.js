import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import style from './dropdown.module.css';
import caret_down from '../../../asets/caret-down.png';
import map_icon from '../../../asets/map_icon.png';
import axios from 'axios';

function Dropdown() {
    const [kota, setKota] = useState([])
    const [defaultValue, setdefaultValue] = useState('Set Kota')
    useEffect(()=>{
        axios.get(`http://localhost:5000/v1/helpers/data_kota`)
        .then(response=>{
            setKota(response.data.data)
        })
    },[])

    const [toggle, setToggle] = useState({
        state : false,
        value : style.hide
    })
    function toggleDropdown(){
        if(toggle.state){
            setToggle({
                state : false,
                value : style.hide
            })
        }else{
            setToggle({
                state : true,
                value : style.show
            })
        }
    }
    return (
        <div className='position-relative'>
            <div className={style.dropdownWrapper} onClick={toggleDropdown}>
                <div className='py-3 px-4 d-flex justify-content-between'>
                    <div className='d-flex'>
                        <div className='mr-3'>
                            <img src={map_icon} className='' />
                        </div>
                        <p className={'m-0 fw-600' + style.textColor}>{defaultValue}</p>
                    </div>
                    <div>
                        <img src={caret_down} />
                    </div>
                </div>
            </div>
            <div className={'position-absolute bg-white border rounded z-1000 '+ toggle.value}>
                {kota.map((value)=>{
                    return <div className={'py-2 px-4 ' + style.dropdownItem} onClick={()=>{
                        setdefaultValue(value.lokasi)
                        }}>
                        <p className='m-0'>{value.lokasi}</p>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Dropdown
