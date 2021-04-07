import React from 'react';
import { useSelector } from 'react-redux';
import {DotButton, ProfilImage} from '../../atoms';
import default_img_profil from '../../../asets/default.png'

function UserCard() {
    const { user } = useSelector(state=>state)
    return (
        <div className="bg-white rounded border py-5 px-4">
            <div className="d-flex justify-content-between">
                <p>INFO</p>
                <DotButton />
            </div>
            <div className="d-flex justify-content-center">
                <ProfilImage src={(user.img_profil == null)?default_img_profil:user.img_profil} />
            </div>
            <label htmlFor="upload">test</label>
            <input type='file' id='upload'/>
            <div className="text-center mt-5">
                <h2 className="fw-600">{ user.username }</h2>
                <p className="mygray-color m-0">Moviegoers</p>
            </div>
        </div>
    )
}

export default UserCard
