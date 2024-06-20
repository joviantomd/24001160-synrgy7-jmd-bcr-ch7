import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './FilterCarPage.css'

import HeroSection from "./components/Hero";
import NavBar from "./components/NavBar";
import Footer from './components/Footer'
const FilterCar: React.FC = () => {
    return (
        <div>
            {/* NavBar */}
            <NavBar />

            {/* Section 1 */}
            <section id="section-1" className="p-l" style={{ background: 'rgba(241, 243, 255, 1)' }}>
                <div id="content-hero">
                    <p id="title-hero" className="m-0 title1">
                        Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
                    </p>
                    <p id="desc-hero" className="text-warp body-text">
                        Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
                        terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
                        untuk sewa mobil selama 24 jam.
                    </p>
                </div>
                <div className="bmw-car">
                    <img
                        src="https://res.cloudinary.com/dsozzm34s/image/upload/v1709900877/Chapter-1-binar/ae506imkh9okvsixtnjg.png"
                        alt="BMW Car"
                        style={{ width: '100%' }}
                    />
                </div>
            </section>

            <section id="filter-section">
                <div id="filterbox">
                    <div id="filter">
                        <div className="filter-field">
                            <p className="title-field">Tipe Driver</p>
                            <select className="form-select select-driver layout-field" id="type-driver">
                                <option disabled selected hidden style={{ color: 'grey' }}>Pilih Tipe Driver</option>
                                <option value="dengansupir">Dengan supir</option>
                                <option value="tanpasupir">Tanpa Sopir Lepas Kunci</option>
                            </select>
                        </div>
                        <div className="filter-field">
                            <p className="title-field">Tanggal</p>
                            <input type="date" id="datetime" className="layout-field" />
                        </div>
                        <div className="filter-field">
                            <p className="title-field">Waktu Jemput/Ambil</p>
                            <select className="select-time layout-field" id="pickup-time">
                                <option disabled selected hidden value=''>Pilih Waktu</option>
                                <option value="07:00:00">7.00</option>
                                <option value="08:00:00">8.00</option>
                                <option value="09:00:00">9.00</option>
                                <option value="10:00:00">10.00</option>
                            </select>
                        </div>
                        <div className="filter-field">
                            <p className="title-field">Jumlah Penumpang (optional)</p>
                            <input className="select-person layout-field" type="text" id="passenger" placeholder="Jumlah Penumpang" />
                        </div>
                        <button id="search-button" className="button" disabled>Cari Mobil</button>
                    </div>
                </div>
            </section>

            <section id="section-2">
                <div className="container text-left">
                    <div className="row row-cols-4" id="list-car">
                        
                    </div>
                </div>
            </section>


            <Footer />
        </div>
    )
}

export default FilterCar