import React from 'react'

function Features() {
    return (
    <>
    <section className="features">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="feature-block d-lg-flex">
                        <div className="feature-item mb-5 mb-lg-0">
                            <div className="feature-icon mb-4">
                                {/* <i className="icofont icofont-surgeon-alt"></i> */}
                                <img src="public/icons/embryo.png" width="60px" alt="emb" className="img-fluid" />
                            </div>
                                {/* <span>24 Hours Service</span> */}
                                <h4 className="mb-3">Pregnancy Care</h4>
                                <p className="mb-2">Dr. Teena specializes in high-risk pregnancies, ensuring the health and well-being of both mother and baby.</p>
                                <ul>
                                    <li>Painless Normal Delivery</li>
                                    <li>Breastfeeding and Maternal Education</li>
                                </ul>
                                <a href="appoinment.html" className="btn btn-main btn-round-full">Make a appoinment</a>
                        </div>
                            
                        <div className="feature-item mb-5 mb-lg-0">
                            <div className="feature-icon mb-4">
                                    {/* <i className="icofont icofont-ui-clock"></i> */}
                                    <img src="public/icons/mother's-health.png" alt="womenhealth" className="img-fluid" />
                            </div>
                                {/* <span>Timing schedule</span> */}
                                <h4 className="mb-3">Women's Health</h4>
                                {/* <ul className="w-hours list-unstyled">
                                    <li className="d-flex justify-content-between">Sun - Wed : <span>7:00 - 18:00</span></li>
                                    <li className="d-flex justify-content-between">Thu - Fri : <span>8:00 - 18:00</span></li>
                                    <li className="d-flex justify-content-between">Sat - sun : <span>9:00 - 18:00</span></li>
                                </ul> */}
                                <p className="mb-2">Dr. Teena provides comprehensive care for women's health concerns.</p>
                                <ul>
                                    <li>PCOD/PCOS</li>
                                    <li>Menstrual Disorders</li>
                                    <li>Puberty</li>
                                    <li>Pre-conceptional Advice</li>
                                </ul>
                        </div>
                            
                        <div className="feature-item mb-5 mb-lg-0">
                                <div className="feature-icon mb-4">
                                    {/* <i className="icofont icofont-support"></i> */}
                                    <img src="public\icons\infertile_17068229.png" width="60px" alt="womenhealth" className="img-fluid" />
                                </div>
                                {/* <span>Emegency Cases</span> */}
                                <h4 className="mb-3">Infertility and Beyond</h4>
                                <p>Experience all-time support for emergencies. We embrace the principle of family medicine, ensuring continuous care. Connect with us for any urgent need.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
    );
}

export default Features;