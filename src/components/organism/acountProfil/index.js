import {React, useState} from 'react';
import { useSelector } from 'react-redux';
import {Button, Input, SecondInput, InputTypePass} from '../../atoms';
import { Link } from 'react-router-dom';
import swal from 'sweetalert'
import axios from 'axios';

function AcountProfil() {

    const { user } = useSelector(state=>state.user)
    const us = user.username;
    const fn = user.firstName;
    const ln = user.lastName;
    const tp = user.telephone;
    const ip = user.img;
    const email = user.email;
    const id_user = user.id_user;

    const [username, setUsername] = useState(us);
    const [img_Profil, setImage] = useState(ip);
    const [firstName, setFirstName] = useState(fn);
    const [lastName, setLastName] = useState(ln);
    const [telephone, setTelephone] = useState(tp);
    const [newPassword, setNewPassword] = useState('');
    const [confirmPasword, setConfirmPassword] = useState('');

    // state fro styling
    const [buttonStyle, setButtonStyle] = useState('py-3 px-4 w-100 rounded mybg-second text-white border-0 c-none');

    function updateProfil(e){
        e.preventDefault()
        const token = localStorage.getItem('token')
        axios({
            method : 'PUT',
            url : `${process.env.REACT_APP_SERVER}/user/profil/${id_user}`,
            data : {
                username : username,
                firstName : firstName,
                lastName : lastName,
                telephone : telephone,
            },
            headers : {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => {
            swal('Succes','Profil Updated','success')
        }).catch(err => {
            swal('Oops','Internal Server Error','error')
        })
    }
    function updatePassword(){
        if(newPassword !== '' || confirmPasword !== ''){
            if(newPassword == confirmPasword){
                const token = localStorage.getItem('token')
                axios({
                    method : 'PUT',
                    url : `${process.env.REACT_APP_SERVER}/user/profil/setPass/${id_user}`,
                    data : {
                        password : newPassword,
                    },
                    headers : {
                        'Authorization': `Bearer ${token}`
                    }
                }).then(response => {
                    swal('Succes','Profil Updated','success')
                }).catch(err => {
                    swal('Oops','Internal Server Error','error')
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
                    <h5 className="my-2">Details Information</h5>
                    <p></p>
                    <hr/>
                </div>
                <div className="col-12 col-md-6">
                    <Input label="FirstName" placeholder="Write Your FirstName" name="FirstName" value={user.firstName} onChange={(e)=>setFirstName(e.target.value)} />
                </div>
                <div className="col-12 col-md-6">
                    <Input label="LastName" placeholder="Write Your LastName" name="LastName" value={user.lastName} onChange={(e)=>setLastName(e.target.value)} />
                </div>
                <div className="col-12 col-md-6 mb-3">
                    <Input label="E-Mail" placeholder="Write Your Email" name="E-Mail" value={email} disabled />
                </div>
                <div className="col-12 col-md-6 mb-3">
                    <SecondInput label="Phone Number" placeholder="Write Your Phone Number" name="PhoneNumber" value={tp} onChange={(e)=>setTelephone(e.target.value)} />
                </div>
                <div className="col-12 col-md-6 mb-3">
                    <Button value="Update Profil" onClick={updateProfil}  />
                </div>
            </div>
            <div className="row my-5 bg-white rounded p-3">
                <div className="col-12">
                    <h5 className="my-2">Account and Privacy</h5>
                    <hr/>
                </div>
                <div className="col-12 col-md-6 mb-3">
                    <InputTypePass label="New Password" placeholder="Write Your New Password" onChange={(e)=>{
                        setNewPassword(e.target.value)
                        if(e.target.value != ''){
                            if(e.target.value == confirmPasword){
                                setButtonStyle('my-btn py-3 px-4 w-100 rounded') 
                            }else{
                                setButtonStyle('py-3 px-4 w-100 rounded mybg-second text-white border-0 c-none')
                            }
                        }
                        }} />
                </div>
                <div className="col-12 col-md-6 mb-3">
                    <InputTypePass label="Confirm Password" placeholder="Write again Your Password" onChange={(e)=>{
                        setConfirmPassword(e.target.value)
                        if(e.target.value != ''){
                            if(newPassword == e.target.value){
                                setButtonStyle('my-btn py-3 px-4 w-100 rounded') 
                            }else{
                                setButtonStyle('py-3 px-4 w-100 rounded mybg-second text-white border-0 c-none')
                            }
                        }
                        }} />
                </div>
                <div className="col-12 col-md-6 mb-3">
                    <Button className={buttonStyle} value="Update Password" onClick={updatePassword}  />
                </div>
            </div>
        </div>
    )
}

export default AcountProfil
