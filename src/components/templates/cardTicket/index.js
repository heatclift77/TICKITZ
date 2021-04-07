import React, {useEffect} from 'react'

function CardTicket() {
    useEffect(()=>{

    }, [])
    return (
        <section className="row my-5 justify-content-between">
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                <div className="row myrounded-2 my-3 py-4 mx-1 border shadow">
                    <div className="col-12">
                        <div className="row border-bottom">
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-12 col-md-12 col-lg-6 mt-lg-3">
                                        <div className="d-flex justify-content-center">
                                            {/* <img src="assets/vendor_lg.png" alt="" /> */}
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-12 col-lg-6">
                                        {/* <img src="assets/ebv.id.png" class=" hide-on-md" /> */}
                                        <p className="mygray-color text-center text-lg-left pt-3">Whatever street No.12, South Purwokerto</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row my-2">
                            {/* data jam tayang */}
                            <div className="col-3 col-md-4 col-lg-4">
                                <p>08:30am</p>
                            </div>
                            {/*  */}
                        </div>
                        <div className="d-flex justify-content-between">
                            <p className="mygray-color font-weight-bold">Price</p>
                            <p className="font-weight-bold">$10.00/seat</p>
                        </div>
                        <div className="row mt-5">
                            <div className="col-10 col-md-12 col-lg-12 mx-auto">
                                <div className="row">
                                    <div className="col-6 col-md-12 col-lg-6">
                                        <button className="mybtn mybtn-active w-100 myrounded-1">book now</button>
                                    </div>
                                    <div className="col-6 col-md-12 col-lg-6 justify-content-center align-self-center text-center my-md-3 my-lg-0">
                                        <a class="color-primary font-weight-bold px-4 px-sm-4 px-md-0 px-lg-0">add to chart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CardTicket
