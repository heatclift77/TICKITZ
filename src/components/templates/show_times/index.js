import React,{useState} from 'react'
import Modal from 'react-modal'
import { InputDate, Schedule } from '../../organism'
import style from './showTimes.module.css'

function ShowTimes() {
    const [data, setData] = useState({
        hours : undefined,
        minutes : undefined,
    })
    const [dangerMessage, setDangerMessage] = useState('')
    const [toggleModal, setToggleModal] = useState(false)
    let [dataSchedule, setSchedule] = useState([])
    function handleAddSchedule(e){
        let timeFormat = ''
        if(data.hours > 24 || data.minutes >= 60 || data.hours === 0 || data.minutes === 0
            || data.hours === undefined || data.minutes === undefined){
            return setDangerMessage('format salah !!!')
        }else{
            // hours input cek
            if(data.hours < 10){
                if(data.hours.toString()[0] !== '0'){
                    return setDangerMessage('format jam salah !!!')
                }
            }else{
                // true here
            }
            // minutes input cek
            if(data.minutes < 10){
                if(data.minutes.toString()[0] !== '0'){
                    return setDangerMessage('format minutes salah')
                }
            }else{
                // true here
            }
        }

        if(data.hours > 12){
            timeFormat = `${data.hours.toString()}:${data.minutes.toString()} pm`
        }else{
            timeFormat = `${data.hours.toString()}:${data.minutes.toString()} am`
        }
        dataSchedule.push(timeFormat)
        toggleModal? setToggleModal(false) : setToggleModal(true)
    }
    return (
        <div className='mt-4'>
            <h2 className='fw-600'>Show Times</h2>
            <div className='bg-white rounded p-4 px-3'>
                <div className='row'>
                    <div className="col-6">
                        <InputDate />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-3 my-2">
                        <button className='mybtn rounded fs-12 fw-600' onClick={(e)=>{
                            (toggleModal)? setToggleModal(false) : setToggleModal(true)
                        }}>+</button>
                    </div>
                    {
                    dataSchedule.map((value, index)=>{
                        return <Schedule value={value} onClick={(e)=>{
                        dataSchedule.splice(index, 1);
                        setSchedule(dataSchedule.map((value)=>{
                            return value
                        })); 
                }} /> 
                })}
                </div>
            </div>
            {/* modal */}
            <Modal 
            isOpen={toggleModal}
            className={style.modalSize}
            overlayClassName={style.overlayConfig}
            closeTimeoutMS={400}
            >
                <div className='py-4 px-3 bg-white rounded '>
                    <div className="row">
                        <div className='col-12'>
                            <div className="d-flex justify-content-end">
                                <button className='mybtn mybtn-active rounded' onClick={(e)=>{
                                (toggleModal)? setToggleModal(false) : setToggleModal(true)
                            }}>Close</button>
                            </div>
                        </div>
                        <div className="col-12">
                            <label htmlFor="jadwal" className='m-0'>Masukkan Waktu</label>
                            <p className='mygray-color fs-08'>hours / minutes  &  PM / AM</p>
                            <div className="row">
                                <div className="col-3">
                                    <div className=''>
                                        <input type="number" className='form-control' name='hours' onChange={(e) => setData({ ...data, hours: e.target.value })} />
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className=''>
                                        <input type="number" className='form-control' name='minutes' onChange={(e) => setData({ ...data, minutes: e.target.value })} />
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className='py-2'>
                                        <h6 className='m-0 mygray-color'>AM / PM</h6>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <p className='text-danger fs-08 my-1'>{dangerMessage}!</p>
                                </div>
                            </div>
                            <p className='mygray-color my-3 fs-08'>Contoh Format 08:00AM</p>
                            <div className="d-flex justify-content-end">
                                <button className='mybtn rounded' onClick={handleAddSchedule}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default ShowTimes
