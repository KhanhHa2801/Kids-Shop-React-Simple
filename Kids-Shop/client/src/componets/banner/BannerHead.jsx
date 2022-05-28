import {useEffect} from 'react'

export default function BannerHead ({listBanner}) {
    return (
        <section id="ishifourbanner" className="ishifourbannerblock">
            
        {
            listBanner  ? 
            <div className="container">
                <div className="row">
                    <div className="bannerleft col-md-4 col-sm-12">
                        <div className="bannerblock"> 
                            <a href="#" className="ishi-customhover-fadeinrotate3D ">
                            <img src={listBanner[0]?.image} alt="banner" className="img-responsive" />
                            </a>  
                        </div>
                    </div>

                    <div className="bannercenter col-md-4 col-sm-12" >
                        <div className="bannerblock" >
                            <a href="#" className="ishi-customhover-fadeinrotate3D ">
                            <img src={listBanner[1]?.image} alt="banner" className="img-responsive" />
                            </a>  
                        </div>
                        <div className="bannerblock">
                            <a href="#" className="ishi-customhover-fadeinrotate3D ">
                            <img src={listBanner[2]?.image} alt="banner" className="img-responsive" />
                            </a>  
                        </div>
                    </div>
                    <div className="bannerright col-md-4 col-sm-12">
                        <div className="bannerblock"> 
                            <a href="#" className="ishi-customhover-fadeinrotate3D ">
                            <img src={listBanner[3]?.image} alt="banner" className="img-responsive" />
                            </a>  
                        </div>
                    </div> 
                </div>
            </div>
            : null
        }
        </section>
    )
}