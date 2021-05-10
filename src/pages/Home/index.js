import { React, Component } from 'react'
import {NowShowing, UpComing} from '../../components/templates'
// ----- image -----
import hero1 from '../../asets/spider_man.png'
import hero2 from '../../asets/lion.png'
import hero3 from '../../asets/woman.png'
// -----------------

export class Home extends Component {
    
    render() {
        return (
            <>
                <div className="container pt-7">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 text-sm-center text-start d-flex align-self-center">
                            <div>
                                <p class="color-third m-0 text-sm-left text-md-center text-lg-left">Nearest Cinema, Newest Movie,</p>
                                <h1 class="color-primary font-weight-bold">Find out now!</h1>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center mt-4 py-4">
                            <div className="d-flex justify-content-center">
                                <div class="mt-4">
                                    <img src={hero1} className="mt-5 mr-4 shadow"/>
                                </div>
                                <div class=" mt-2">
                                    <img src={hero2} className="mt-4 mr-4 shadow"/>
                                </div>
                                <div class="">
                                    <img src={hero3} className="shadow" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <NowShowing />
                    <UpComing />
                </div>
            </>
        )
    }
}

export default Home
