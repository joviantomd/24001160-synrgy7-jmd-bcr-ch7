import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../LandingPage.css'

const NavBar: React.FC = () => {
    return (
        < div>
        <header style={{ background: 'rgba(241, 243, 255, 1)' }}>    
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid d-flex">
                    <a href="/">
                        <button
                            className="border-0"
                            style={{
                                width: '100px',
                                height: '34px',
                                backgroundColor: 'blue',
                                borderRadius: '4px',
                            }}
                        />
                    </a>
                    <button
                        className="navbar-toggler border-0"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasNavbar"
                        aria-controls="offcanvasNavbar"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="offcanvas offcanvas-end"
                        tabIndex={-1}
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                    >
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">BCR</h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="offcanvas-body justify-content-end" id="offcanvasNavbar">
                            <ul className="navbar-nav">
                                <li className="nav-item p-2">
                                    <a className="nav-link navbar-menu active" aria-current="page" href="#section-2">Our Services</a>
                                </li>
                                <li className="nav-item p-2">
                                    <a className="nav-link navbar-menu" aria-current="page" href="#section-3">Why Us</a>
                                </li>
                                <li className="nav-item p-2">
                                    <a className="nav-link navbar-menu" href="#section-4">Testimonial</a>
                                </li>
                                <li className="nav-item p-2">
                                    <a className="nav-link navbar-menu" href="#section-faq">FAQ</a>
                                </li>
                                <li className="nav-item p-2">
                                    <button className="button">Register</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            </header>
        </div>
    )
}

export default NavBar