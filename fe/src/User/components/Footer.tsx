import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../LandingPage.css'

const Footer: React.FC = () => {
    return (
        <div className="footer">
            <footer className="d-flex justify-content-between" style={{ marginBottom: '100px' }}>
                <div style={{ width: '268px' }}>
                    <p className="mb-3 body-text">
                        Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000
                    </p>
                    <p className="mb-3 body-text">binarcarrental@gmail.com</p>
                    <p className="mb-3 body-text">081-233-334-808</p>
                </div>
                <div style={{ gap: '16px' }}>
                    <p className="mb-3 bold-text">Our services</p>
                    <p className="mb-3 bold-text">Why Us</p>
                    <p className="mb-3 bold-text">Testimonial</p>
                    <p className="mb-3 bold-text">FAQ</p>
                </div>
                <div className="mb-3" style={{ width: '268px' }}>
                    <p className="mb-3 body-text">Connect with us</p>
                    <div className="d-flex" style={{ gap: '16px' }}>
                        <img
                            src="https://res.cloudinary.com/dsozzm34s/image/upload/v1710154334/Chapter-1-binar/logo/iv0pdtkn23p0lo7ljrly.svg"
                            alt="Facebook"
                        />
                        <img
                            src="https://res.cloudinary.com/dsozzm34s/image/upload/v1710154334/Chapter-1-binar/logo/oi6c7tsjjfcsie6csu2a.svg"
                            alt="Instagram"
                        />
                        <img
                            src="https://res.cloudinary.com/dsozzm34s/image/upload/v1710154334/Chapter-1-binar/logo/s1zocgclry5v4gklowhm.svg"
                            alt="Twitter / X"
                        />
                        <img
                            src="https://res.cloudinary.com/dsozzm34s/image/upload/v1710154334/Chapter-1-binar/logo/syiluw3dnfkidp4pgnkv.svg"
                            alt="Email"
                        />
                        <img
                            src="https://res.cloudinary.com/dsozzm34s/image/upload/v1710154334/Chapter-1-binar/logo/dh95ouvhedlgcwmdgovz.svg"
                            alt="Twitch"
                        />
                    </div>
                </div>
                <div style={{ width: 'fit-content' }}>
                    <p className="mb-3 body-text">Copyright Binar 2022</p>
                    <button
                        className="border-0"
                        style={{ width: '100px', height: '34px', backgroundColor: '#0d28a6' }}
                    ></button>
                </div>
            </footer>
        </div>
    )
}

export default Footer