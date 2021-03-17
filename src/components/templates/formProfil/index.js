import {React, Fragment, useState, useEffect} from 'react';
import {TabButton} from '../../atoms';
import {AcountProfil, OrderHistory} from '../../organism';
import axios from 'axios';

function FormProfil() {
    const [data, setData] = useState([])
    const [AcountSetting, setFirst] = useState(true)
    const [OrderHistori, setSecond] = useState(false)
    const id = '7fcd5929-0902-428c-aa62-3af701c33c4c'
    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_SERVER}/transaction/user/${id}/1`)
        .then(res =>{
            setData(res.data.data)
        })  
    })
    function delTrans(id_trans){
        axios.delete(`${process.env.REACT_APP_SERVER}/transaction/${id_trans}`)
        .then(res =>{
            setData(res.data.data)
        })  
    }
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
            {(AcountSetting) ? <AcountProfil />:  
            data.map(trans=>{
                return <OrderHistory 
                title={trans.movie} 
                tgl={trans.created_at} 
                onClick={()=>delTrans(trans.id_transaction)}
                />
            })
            } 
            
        </Fragment>
    )
}

export default FormProfil
