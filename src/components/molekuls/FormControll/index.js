import {React, useState} from 'react'
import {TabButton} from '../../atoms'

function FormControll({sendState}) {
    const [first, setFirst] = useState(true)
    const [second, setSecond] = useState(false)
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
        <div className="row bg-white rounded">
            <div className="col-12 d-flex">
                <TabButton title="Acount Setting" className={dynamicClass(first)} 
                onClick={()=>{
                    setFirst(true)
                    setSecond(false)
                    sendState(first)
                    }}/>
                <TabButton title="Order History" className={dynamicClass(second)} 
                onClick={()=>{
                    setFirst(false)
                    setSecond(true)
                    sendState(second)
                }}/>
            </div>
        </div>
    )
}

export default FormControll
