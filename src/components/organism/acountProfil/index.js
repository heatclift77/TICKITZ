import {React, useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import {Button, Input, SecondInput, InputTypePass} from '../../atoms';
import swal from 'sweetalert'
import axios from 'axios';

function AcountProfil() {

    const { user } = useSelector(state=>state.user)
    const [state, setState] = useState({
        firstname:"",
        lastname:"",
        phone:"",
        username:""
    })

    useEffect(()=>{
        setState({
            firstname:user.firstname,
            lastname:user.lastname,
            phone:user.telephone,
            username:user.username
        })
    },[user])
    const [newPassword, setNewPassword] = useState('');
    const [confirmPasword, setConfirmPassword] = useState('');

    const [updateProfileToggle, setUPdateProfileToggle] = useState(false)
    const [updatePassToggle, setUPdatePassToggle] = useState(false)
    // state fro styling
    const [buttonStyle, setButtonStyle] = useState('py-3 px-4 w-100 rounded mybg-second text-white border-0 c-none');

    function updateProfil(e){
        e.preventDefault()
        if(updateProfileToggle){
            const token = localStorage.getItem('token')
            axios({
                method : 'PUT',
                url : `${process.env.REACT_APP_SERVER}/v1/user/profil/${user.id_user}`,
                data : {
                    username : state.username,
                    firstName : state.firstname,
                    lastName : state.lastname,
                    telephone : state.phone,
                },
                headers : {
                    'Authorization': `Bearer ${token}`
                }
            }).then(() => {
                swal('Succes','Profil Updated','success')
                setUPdateProfileToggle(false)
            })
        }
    }
    function updatePassword(){
        if(newPassword !== '' || confirmPasword !== ''){
            if(newPassword === confirmPasword){
                const token = localStorage.getItem('token')
                axios({
                    method : 'PUT',
                    url : `${process.env.REACT_APP_SERVER}/v1/user/profil/setPass/${user.id_user}`,
                    data : {
                        password : newPassword,
                    },
                    headers : {
                        'Authorization': `Bearer ${token}`
                    }
                }).then(() => {
                    swal('Succes','Profil Updated','success')
                    setConfirmPassword("")
                    setNewPassword("")
                    setUPdatePassToggle(false)
                })
            }else{
            }
        }else{
            
        }
    }
    return (
        <div>
            <div className="row my-5 bg-white rounded p-3">
                <div className="col-12">
                    <div className="d-flex justify-content-between">
                        <h5 className="my-2">Details Information</h5>
                        <div className="d-flex">
                            <span className="pr-3 my-auto">Klik untuk update profil kamu </span>
                            <input type="checkbox" checked={updateProfileToggle} onClick={()=>{
                                if(updateProfileToggle){
                                    setUPdateProfileToggle(false)
                                }else{
                                    setUPdateProfileToggle(true)
                                }
                            }} className="align-self-center" />
                        </div>
                    </div>
                    <hr/>
                </div>
                <div className="col-12 col-md-6 mb-3">
                    <Input label="FirstName" placeholder="Write Your FirstName" name="FirstName" value={state.firstname} disabled={updateProfileToggle ? false : true} onChange={(e)=>setState({...state, firstname:e.target.value})} />
                </div>
                <div className="col-12 col-md-6 mb-3">
                    <Input label="LastName" placeholder="Write Your LastName" name="LastName" value={state.lastname} disabled={updateProfileToggle  ? false : true} onChange={(e)=>{setState({...state, lastname:e.target.value})}} />
                </div>
                <div className="col-12 col-md-6 mb-3">
                    <Input label="E-Mail" placeholder="Write Your Email" name="E-Mail" value={user.email} disabled />
                </div>
                <div className="col-12 col-md-6 mb-3">
                    <Input label="Username" placeholder="Write Your Username" value={state.username} disabled={updateProfileToggle  ? false : true} onChange={(e)=>{setState({...state, username:e.target.value})}} />
                </div>
                <div className="col-12 col-md-6 mb-3">
                    <SecondInput label="Phone Number" placeholder="Write Your Phone Number" name="PhoneNumber" value={state.phone} disabled={updateProfileToggle  ? false : true} onChange={(e)=>{setState({...state, phone:e.target.value})}} />
                </div>
                <div className="col-12 mb-3">
                    <Button value="Update Profil" disabled={updateProfileToggle  ? false : true} onClick={updateProfil}  />
                </div>
            </div>
            <div className="row my-5 bg-white rounded p-3">
                <div className="col-12">
                    <div className="d-flex justify-content-between">
                        <h5 className="my-2">Account and Privacy</h5>
                        <div className="d-flex">
                            <span className="pr-3 my-auto">Klik untuk update Password kamu </span>
                            <input type="checkbox" checked={updatePassToggle} onClick={()=>{
                                if(updatePassToggle){
                                    setUPdatePassToggle(false)
                                }else{
                                    setUPdatePassToggle(true)
                                }
                            }} className="align-self-center" />
                        </div>
                    </div>
                    <hr/>
                </div>
                <div className="col-12 col-md-6 mb-3">
                    <InputTypePass label="New Password" placeholder="Write Your New Password" disabled={updatePassToggle ? false : true} onChange={(e)=>{
                        setNewPassword(e.target.value)
                        if(e.target.value !== ''){
                            if(e.target.value === confirmPasword){
                                setButtonStyle('my-btn py-3 px-4 w-100 rounded') 
                            }else{
                                setButtonStyle('py-3 px-4 w-100 rounded mybg-second text-white border-0 c-none')
                            }
                        }
                        }} />
                </div>
                <div className="col-12 col-md-6 mb-3">
                    <InputTypePass label="Confirm Password" placeholder="Write again Your Password" disabled={updatePassToggle ? false : true}  onChange={(e)=>{
                        setConfirmPassword(e.target.value)
                        if(e.target.value !== ''){
                            if(newPassword === e.target.value){
                                setButtonStyle('my-btn py-3 px-4 w-100 rounded') 
                            }else{
                                setButtonStyle('py-3 px-4 w-100 rounded mybg-second text-white border-0 c-none')
                            }
                        }
                        }} />
                </div>
                <div className="col-12 col-md-6 mb-3">
                    <Button className={buttonStyle} value="Update Password" disabled={updatePassToggle ? false : true} onClick={updatePassword}  />
                </div>
            </div>
        </div>
    )
}

export default AcountProfil
