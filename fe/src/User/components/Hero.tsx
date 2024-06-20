import React from "react";
import '../LandingPage.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
const HeroSection:React.FC = () =>{
    return(
        <section id="section-1" className="p-l" style={{ background: 'rgba(241, 243, 255, 1)' }}>
                <div id="content-hero">
                    <p id="title-hero" className="m-0 title1">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</p>
                    <p id="desc-hero" className="text-warp body-text">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                    <a href="/filter" className="button" style={{ backgroundColor: 'rgba(92, 184, 95, 1)', border: 0, color: 'white', borderRadius: '4px', textDecoration: 'none' }}>
                        Mulai Sewa Mobil
                    </a>
                </div>
                <div className="bmw-car">
                    <img src="https://res.cloudinary.com/dsozzm34s/image/upload/v1709900877/Chapter-1-binar/ae506imkh9okvsixtnjg.png" alt="" className="" style={{ width: '100%' }} />
                </div>
            </section>
    )

}

export default HeroSection
