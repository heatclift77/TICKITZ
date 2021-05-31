import React from 'react'
function MovieInfo({image, title, genre, price, release_date, directed_by, duration, casts, synopsis}) {
    const formatRibuan = (uang) => {
        if(uang !== undefined){
            const sisa = uang.length % 3
            let rupiah = uang.substr(0, sisa)
            const ribuan = uang.substr(sisa).match(/\d{3}/g);
            if (ribuan) {
                const separator = sisa ? '.' : '';
                rupiah += separator + ribuan.join('.');
                return rupiah
            }
            return rupiah
        }else{
            return uang
        }
    }
    return (
        <div>
            <section className="row py-5 border-bottom-sm">
                <div className="col-12 col-sm-12 col-md-4 col-lg-3 my-5 my-md-0 mx-auto">
                    <div className="col-8 col-sm-8 col-md-12 mx-auto p-4 myrounded-2 shadow">
                        <img src={image} className="w-100" alt="/" />
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-8 col-lg-9 my-lg-3 px-md-4">
                    <div className="d-flex justify-content-between">
                        <div className="text-center text-sm-left">
                            <h2 className="font-weight-bold mb-md-0 mb-lg-1">{title}</h2>
                            <p className="mytext-color">{genre}</p>
                        </div>
                        <div>
                            <h2 className="font-weight-bold color-primary">Rp {formatRibuan(price)}/Pcs</h2>
                        </div>
                    </div>
                <div className="row mt-5 mt-sm-0">
                    <div className="col-6 col-sm-6 col-md-12 col-lg-12 my-1">
                        <div>
                            <p className="mygray-color m-0">Release date</p>
                            <p className="font-weight-bold mb-md-0 mb-lg-2">{release_date}</p>
                        </div>
                    </div>
                    <div class="col-6 col-sm-6 col-md-12 col-lg-12 my-1">
                        <div>
                            <p className="mygray-color m-0">Directed by</p>
                            <p className="font-weight-bold mb-md-0 mb-lg-2">{directed_by}</p>
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
        </div>
    )
}

export default MovieInfo
