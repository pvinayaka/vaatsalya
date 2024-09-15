import React from 'react'
import './HeroBanner.css'

function HeroBanner() {
    return (
    <>
    <section className="banner" id='heroBanner'>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-12 col-xl-7">
                    <div className="block">
                        <div className="divider mb-3"></div>
                        <span className="text-uppercase text-sm letter-spacing ">Expert Care for Every Stage of Womanhood</span>
                        <h1 className="mb-3 mt-3">Your Journey to Wellness Begins Here</h1>
                        
                        <p className="mb-4 pr-5">Empowering women through exceptional care, our clinic is committed to your health journey. We provide holistic services that address both your physical and mental health, ensuring you feel supported every step of the way.</p>
                        <div className="btn-container">
                            <a href="https://www.practo.com/bangalore/clinic/dr-teena-s-vaatsalya-clinic-siddapura" target="_blank" className="btn btn-main-2 btn-icon btn-round-full" style={{ backgroundColor: '#3364db',color: '#ffffff', fontWeight: 'bold' ,fontSize: '15px', borderRadius: '50px' }}>Make appoinment
                                <i className="icofont icofont-simple-right ml-2  "></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  );
}

export default HeroBanner;
