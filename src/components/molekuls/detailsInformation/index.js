import {React} from 'react'
import {Input, SecondInput} from '../../atoms'
function DetailsInformations({value, onChange}) {
    return (
            <div className="row my-5 bg-white rounded p-3">
                <div className="col-12">
                    <h5 className="my-2">Details Information</h5>
                    <p></p>
                    <hr/>
                </div>
                <div className="col-12 col-md-6">
                    <Input label="FirstName" placeholder="Write Your FirstName" name="FirstName" value={value} onChange={onChange} />
                </div>
                <div className="col-12 col-md-6">
                    <Input label="LastName" placeholder="Write Your LastName" name="LastName" value={value} onChange={onChange} />
                </div>
                <div className="col-12 col-md-6 mb-3">
                    <Input label="E-Mail" placeholder="Write Youur Email" name="E-Mail" value={value} onChange={onChange} />
                </div>
                <div className="col-12 col-md-6 mb-3">
                    <SecondInput label="Phone Number" placeholder="Write Youur Phone Number" name="PhoneNumber" value={value} onChange={onChange} />
                </div>
            </div>
    )
}

export default DetailsInformations
