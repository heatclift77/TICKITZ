import React, {useState, useEffect, useRef} from 'react';
import { useSelector } from 'react-redux';
import {DotButton, ProfilImage} from '../../atoms';
import swal from 'sweetalert'
import axios from 'axios'
function UserCard() {
    const selectImage = useRef(null)
    const { user } = useSelector(state=>state.user)
    const [state, setState] = useState({
        avatar : "",
        dataImage : "",
        updateImageButtonToggle : false
    })
    useEffect(()=>{
        setState({...state, avatar:user.img_profil})
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[user])
    const handleUpdateImage = ()=> {
        const form = new FormData()
        form.append("id_user", user.id_user)
        form.append("img", state.dataImage)
        axios({
            url:`${process.env.REACT_APP_SERVER}/v1/user/img_profile`,
            method:"PUT",
            data:form
        })
        .then(res=>{
            swal("sukses", res.data.message, "success")
            setState({...state, updateImageButtonToggle:false})
        })
    }
    return (
        <div className="bg-white rounded border py-5 px-4">
            <div className="d-flex justify-content-between">
                <p>INFO</p>
                <DotButton />
            </div>
            <div className="d-flex justify-content-center">
                <ProfilImage src={state.avatar} />
            </div>
            <div className={state.updateImageButtonToggle ? "" : "hide" }>
                <div className="my-3 d-flex justify-content-around">
                    <button className="mybg-primary border-0 rounded-pill px-3 py-1 text-white" onClick={handleUpdateImage}>save</button>
                    <button className="bg-danger border-0 rounded-pill px-3 py-1 text-white" onClick={()=>{
                        setState({
                            ...state,
                            avatar:user.img,
                            updateImageButtonToggle:false
                        })
                    }} >cancel</button>
                </div>
            </div>
            <div className="w-100 text-center my-3">
                <a href="!#" className="myprimary-color c-pointer" style={{}} onClick={()=>{
                    selectImage.current.click()
                }}>Ubah Profil</a>
                <input type="file" style={{position:"absolute", top:0, pointerEvents:"none", opacity:0}} ref={selectImage} onChange={(e)=>{
                    if(e.target.files[0].type === "image/jpeg" || e.target.files[0].type === "image/jpg" || e.target.files[0].type === "image/png"){
                        if(e.target.files[0].size < 2000000){
                            setState({
                                ...state,
                                avatar:URL.createObjectURL(e.target.files[0]),
                                dataImage:e.target.files[0],
                                updateImageButtonToggle:true
                            })
                        }else{
                            swal("Oops", "Ukuran maksimal file hanya 2mb", "error")
                        }
                    }else{
                        swal("Oops", "Hanya mendukung format gambar jpeg, jpg dan png", "error")
                    }
                }} />
            </div>
            <div className="text-center mt-4">
                <h2 className="fw-600">{ user.username }</h2>
            </div>
        </div>
    )
}

export default UserCard
