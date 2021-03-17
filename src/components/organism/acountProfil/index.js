import {React, useState, useEffect} from 'react';
import {Button, Input, SecondInput, InputTypePass} from '../../atoms';
import { Link, link } from 'react-router-dom';
import axios from 'axios';

function AcountProfil() {
    const [data, setData] = useState({})
    const [newPassword, setNewPassword] = useState('')
    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_SERVER}/user/7fcd5929-0902-428c-aa62-3af701c33c4c`)
        .then(res => {
            setData(res.data[0])
            setNewPassword(res.data[0].password)
        })
    },[])
    function handleCekPass(e){
        if(e.target.value == ''){
            setNewPassword(data.password)
        }else{
            setNewPassword(e.target.value)
        }
    }
    function updateData(e){
        e.preventDefault()
        if(newPassword == data.password){
            const url = `${process.env.REACT_APP_SERVER}/user/7fcd5929-0902-428c-aa62-3af701c33c4c`
            axios({
                method : 'put',
                url : url,
                headers: { 'content-type': 'application/json' },
                data : {
                    email : data.email,
                    password : data.password,
                    username : data.firstName + ' ' + data.lastName,
                    telephone : data.telephone,
                    firstName : data.firstName,
                    lastName : data.lastName
                }
            })
            .then(res => {
                console.log(res);
            })
            alert('profil berhasil di update')
        }else{
            alert('confirm password tidak sama')
        }
    }
    return (
        <div>
            <div className="row my-5 bg-white rounded p-3">
                <div className="col-12">
                    <h5 className="my-2">Details Information</h5>
                    <p></p>
                    <hr/>
                </div>
                <div className="col-12 col-md-6">
                    <Input label="FirstName" placeholder="Write Your FirstName" name="FirstName" value={data.firstName} onChange={(e)=>setData({...data, firstName:e.target.value})} />
                </div>
                <div className="col-12 col-md-6">
                    <Input label="LastName" placeholder="Write Your LastName" name="LastName" value={data.lastName} onChange={(e)=>setData({...data, lastName:e.target.value})} />
                </div>
                <div className="col-12 col-md-6 mb-3">
                    <Input label="E-Mail" placeholder="Write Youur Email" name="E-Mail" value={data.email} onChange={(e)=>setData(...data, {email:e.target.value})} />
                </div>
                <div className="col-12 col-md-6 mb-3">
                    <SecondInput label="Phone Number" placeholder="Write Your Phone Number" name="PhoneNumber" value={data.telephone} onChange={(e)=>setData({...data, telephone:e.target.value})} />
                </div>
            </div>
            {/* <AcountPrivacy /> */}
            <div className="row my-5 bg-white rounded p-3">
                <div className="col-12">
                    <h5 className="my-2">Account and Privacy</h5>
                    <hr/>
                </div>
                <div className="col-12 col-md-6 mb-3">
                    <InputTypePass label="New Password" placeholder="Write Your New Password" onChange={handleCekPass} />
                </div>
                <div className="col-12 col-md-6 mb-3">
                    <InputTypePass label="Confirm Password" placeholder="Write again Your Password" onChange={(e)=>setData({...data, password:e.target.value})} />
                </div>
            </div>
            <div className="row mb-5">
                <div className="col-12 col-md-6">
                    <Link to='profil_page'>
                        <Button value="Update Change" onClick={updateData}  />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AcountProfil
