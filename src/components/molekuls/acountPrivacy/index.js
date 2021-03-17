import React from 'react'
import  {InputTypePass}  from '../../atoms'
function AcountPrivacy() {
    return (
            <div className="row my-5 bg-white rounded p-3">
                <div className="col-12">
                    <h5 className="my-2">Account and Privacy</h5>
                    <hr/>
                </div>
                <div className="col-12 col-md-6 mb-3">
                    <InputTypePass label="New Password" placeholder="Write Your New Password" />
                </div>
                <div className="col-12 col-md-6 mb-3">
                    <InputTypePass label="Confirm Password" placeholder="Write again Your Password" />
                </div>
            </div>
    )
}

export default AcountPrivacy
