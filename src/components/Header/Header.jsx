import { useState } from 'react';
import './Header.css';

function Header(){
    const [isNavOpen, setIsNavOpen] = useState(false);
    
    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };
    
    return (
    <>
    <header>
        <nav className="navbar navbar-expand-lg navigation fixed-top bg-light" id="navbar">
            <div className="container">
                <a className="navbar-brand d-flex align-items-center" href="index.html">
                    <img src="public\logo\logo.svg" alt="logo" className="img-fluid" />
                    <p className='logo-title mb-0 p-0'>Vaatsalya.</p>
                </a>
                
                <button className={`navbar-toggler ${isNavOpen ? '' : 'collapsed'}`} type="button" onClick={toggleNav} aria-label="Toggle navigation">
                    <span className="icofont icofont-navigation-menu"></span>
                </button>
                
                <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarmain">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#heroBanner">Home</a>
                        </li>
                        <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                        <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
                        <li className="nav-item"><a className="nav-link" href="#appoinment">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
   </header>
  </>
 );
}

export default Header;