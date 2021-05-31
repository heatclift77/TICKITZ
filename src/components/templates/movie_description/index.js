import React from 'react'
import InputDate from '../../organism/inputDate'
import Input from '../../atoms/input'
import Movies from '../../atoms/movies'
import img_xample from '../../../asets/cover_spiderman.png'

function MovieDescription({
    handleName, handleCategory, handleRelease_date, handleHours, handleMinutes, dateValue,
    handleDirector, handleCasts, handleSynopsis, getImg
}) {
    return (
        <>
            <h2 className='my-3 fw-600'>Movie Description</h2>
            <div className='bg-white px-4 py-5 myrounded-1'>
                <div className='row'>
                    <div className="col-12 col-lg-5">
                        <div className='w-100 d-flex justify-content-sm-center justify-content-lg-start'>
                            <div className='border myrounded-1 p-xl-4 p-lg-3'>
                                <Movies src={img_xample} />
                            </div>
                        </div>
                        <div className='my-3'>
                            <input type="file" onClick={getImg} />
                        </div>
                    </div>
                    <div className="col-12 col-lg-7">
                        <div className='mb-3'>
                            <Input label='Movie Name' onChange={handleName} />
                        </div>
                        <div className='mb-3'>
                            <Input label='Category' onChange={handleCategory} />
                        </div>
                        <div className="d-flex justify-content-between">
                            <p>Release date</p>
                            <p>Duration (hour / minute)</p>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <InputDate value={dateValue} onChange={handleRelease_date} />
                            </div>
                            <div className="col-3">
                                <input type='number' className='my-input rounded w-100 py-3 px-2' onChange={handleHours} />
                            </div>
                            <div className="col-3">
                                <input type='number' className='my-input rounded w-100 py-3 px-2' onChange={handleMinutes} />
                            </div>
                        </div>
                    </div>
                    {/* <Dropdown /> */}
                </div>
                <div className="row">
                    <div className="col-12 col-lg-5">
                        <Input label='Director' onChange={handleDirector} />
                    </div>
                    <div className="col-12 col-lg-7">
                        <Input label='Casts' onChange={handleCasts} />
                    </div>
                    <div className="col-12 mt-3">
                        <div className='d-flex flex-column'>
                            <label for="synopsis">synopsis</label>
                            <textarea class="form-control" name="synopsis"onChange={handleSynopsis}></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieDescription
