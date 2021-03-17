import React from 'react'
import tickitz from '../../../asets/tickitz.png';
import ebu from '../../../asets/vendor_lg.png';
import cineone from '../../../asets/vendor_lg2.png';
import hiflix from '../../../asets/vendor_lg3.png';
import fb from '../../../asets/lg_fb.png';
import ig from '../../../asets/lg_ig.png';
import twt from '../../../asets/lg_tw.png';
import yt from '../../../asets/lg_yt.png';

function Footer() {
    return (
        <div className="row bg-white mt-5 p-5">
            <div className="col-sm-12 col-md-4 col-lg-4">
                <img src={tickitz} className="mb-4 w-150px" />
                <p className="text-secondary w-sm-50">Stop waiting in line. Buy tickets conveniently, watch movies quietly.</p>
            </div>
            <div className="col-sm-12 col-md-2 col-lg-2 my-sm-4 my-md-0 my-lg-0">
                <h5 class="font-weight-bold pb-md-3">Explore</h5>
                <div class="row justify-content-between">
                    <div className="col-sm-4 col-md-12 col-lg-12 my-2"><a href="#" className="text-secondary">Cinemas</a></div>
                    <div className="col-sm-4 col-md-12 col-lg-12 my-2"><a href="#" className="text-secondary">MovieLists</a></div>
                    <div className="col-sm-4 col-md-12 col-lg-12 my-2"><a href="#" className="text-secondary">Notifications</a></div>
                    <div className="col-sm-4 col-md-12 col-lg-12 my-2"><a href="#" className="text-secondary">MyTickets</a></div>
                </div>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3 my-sm-4 my-md-0 my-lg-0">
                <h5 className="font-weight-bold pb-md-3">Our Sponsor</h5>
                <div className="row align-self-center">
                    <div className="justify-content-sm-between">
                        <div className="col-sm-4 col-md-12 col-lg-12 my-2 align-self-center"><img src={ebu} className="w-sm-100" /></div>
                        <div className="col-sm-4 col-md-12 col-lg-12 my-2 align-self-center"><img src={cineone}  className="w-sm-100" /></div>
                        <div className="col-sm-4 col-md-12 col-lg-12 my-2 align-self-center"><img src={hiflix} className="w-sm-100" /></div>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3 my-sm-4 my-md-0 my-lg-0">
                <h5 className="font-weight-bold pb-md-3">Follow Us</h5>
                <div className="row mt-sm-4 mt-lg-0">
                    <div className="col-2 col-lg-12 cover mt-md-2 d-flex">
                        <img src={fb} />
                        <a className="color-third px-4 d-lg-block hide-on-sm hide-on-md hide-on-lg">Tickitz Cinema id</a>
                    </div>
                    <div class="col-2 col-lg-12 cover mt-md-2 d-flex">
                        <img src={ig} />
                        <a className="color-third px-4 d-lg-block hide-on-sm hide-on-md hide-on-lg">tickitz.id</a>
                    </div>
                    <div className="col-2 col-lg-12 cover mt-md-2 d-flex">
                        <img src={twt}  />
                        <a href="!#" class="color-third px-4 d-lg-block hide-on-sm hide-on-md hide-on-lg">tickitz.id</a>
                    </div>
                    <div className="col-2 col-lg-12 cover mt-md-2 d-flex">
                        <img src={yt} />
                        <a className="color-third px-4 d-lg-block hide-on-sm hide-on-md hide-on-lg">Tickitz Cinema id</a>
                    </div>
                </div>
            </div>
            <div class="col-12 my-5">
                <p class="text-left text-sm-left text-md-center text-lg-center color-secondary">© 2020 Tickitz. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer
