import React from 'react'
import CoverImage from '../../../asets/cover_spiderman.png'
function MovieInfo(props) {
    const {
        title, genre, releaseDate, 
        directedBy, duration, casts,
        synopsis
    } = props
    return (
        <div>
            <section className="row py-5 border-bottom-sm">
                <div className="col-12 col-sm-12 col-md-4 col-lg-3 my-5 my-md-0 mx-auto">
                    <div className="col-8 col-sm-8 col-md-12 mx-auto p-4 myrounded-2 shadow">
                        <img src={CoverImage} className="w-100" />
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-8 col-lg-9 my-lg-3 px-md-4">
                <div className="text-center text-sm-left">
                    <h2 className="font-weight-bold mb-md-0 mb-lg-1">{title}</h2>
                    <p className="mytext-color">{genre}</p>
                </div>
                <div className="row mt-5 mt-sm-0">
                    <div className="col-6 col-sm-6 col-md-12 col-lg-12 my-1">
                        <div>
                            <p className="mygray-color m-0">Release date</p>
                            <p className="font-weight-bold mb-md-0 mb-lg-2">{releaseDate}</p>
                        </div>
                    </div>
                    <div class="col-6 col-sm-6 col-md-12 col-lg-12 my-1">
                        <div>
                            <p className="mygray-color m-0">Directed by</p>
                            <p className="font-weight-bold mb-md-0 mb-lg-2">{directedBy}</p>
                        </div>
                    </div>
                    <div className="col-6 col-sm-6 col-md-12 col-lg-12 my-1">
                        <div>
                            <p className="mygray-color m-0">Duration</p>
                            <p className="font-weight-bold mb-md-0 mb-lg-2">{duration}</p>
                        </div>
                    </div>
                    <div className="col-6 col-sm-6 col-md-12 col-lg-12 my-1">
                        <div>
                            <p className="mygray-color m-0">Casts</p>
                            <p className="font-weight-bold mb-md-0 mb-lg-2">{casts}</p>
                        </div>
                    </div>
                </div>
            </div>
            </section>
            <section className="row my-sm-5 my-lg-2">
                <div className="col-12 col-sm-12">
                    <h5 className="font-weight-bold pb-4">Synopsis</h5>
                    <p className="mygray-color">{synopsis}</p>
                </div>
            </section>
            <section className="row">
                <div className="col-12 col-sm-12 col-lg-10 text-center mx-auto">
                <h4 className="font-weight-bold p-5">Showtimes and Tickets</h4>
                <div className="row">
                    <div className="col-10 col-lg-5 mx-auto my-2 rounded bg-light p-4 cover">
                        <div className="row">
                            <div class="col-2">
                                {/* <img src="assets/calender.png" className="ico-size" /> */}
                            </div>
                            <div class="col-8 align-self-center position-relative">
                                <p class="mygray-color text-left fw-600 my-auto">Set a date</p>
                                <input type="date" className="w-100" />
                            </div>
                            <div className="col-2 align-self-center">
                                {/* <img src="assets/caret-down.png" className="my-auto" /> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-10 col-lg-5 mx-auto  my-2 rounded bg-light p-4 cover ">
                        <div className="row">
                            <div className="col-2">
                                {/* <img src="assets/maps.png" className="ico-size" /> */}
                            </div>
                            <div class="col-8 align-self-center">
                                <p class="mygray-color text-left fw-600 my-auto">Set a City</p>
                            </div>
                            <div class="col-2 align-self-center">
                                {/* <img src="assets/caret-down.png" className="my-auto" /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </div>
    )
}

export default MovieInfo
