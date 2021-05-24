import {React, Fragment, useState} from 'react';
import { useSelector } from 'react-redux'
import {TabButton} from '../../atoms';
import {AcountProfil, OrderHistory} from '../../organism';
import axios from 'axios';

function FormProfil() {
    const [AcountSetting, setFirst] = useState(true);
    const [OrderHistori, setSecond] = useState(false);
    function sendState(state){
        return state
    }
    function dynamicClass (state){
        if(state){
            return "border-bottom-primary m-0 py-3 mx-3 c-pointer"
        }else{
            return "m-0 py-3 mx-3 mygray-color c-pointer"
        }
    }
    return (
        <Fragment>
            <div className="row bg-white rounded">
                <div className="col-12 d-flex">
                    <TabButton title="Acount Setting" className={dynamicClass(AcountSetting)} 
                    onClick={()=>{
                        setFirst(true)
                        setSecond(false)
                        sendState(AcountSetting)
                        }}/>
                    <TabButton title="Order History" className={dynamicClass(OrderHistori)} 
                    onClick={()=>{
                        setFirst(false)
                        setSecond(true)
                        sendState(OrderHistori)
                    }}/>
                </div>
            </div>
            {(AcountSetting) ? <AcountProfil />: <OrderHistory/> } 
            
        </Fragment>
    )
}

export default FormProfil
