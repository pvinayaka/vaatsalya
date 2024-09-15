function Services() {
    return (
        <>
            <section className="section service gray-bg" id='services'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7 text-center">
                            <div className="section-title">
                                <h2>Services</h2>
                                <div className="divider mx-auto my-4"></div>
                                <p>Comprehensive Healthcare Services at Dr. Teena's Vaatsalya Clinic</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="service-item mb-4">
                                <div className="icon d-flex align-items-center">
                                    {/* <i className="icofont icofont-laboratory text-lg"></i> */}
                                    <img src="public/icons/caesarean.png" style={{ width: '50px', height: '50px' }} alt="Caesarean Section" className="img-fluid" />
                                    <h4 className="mt-3 mb-3">Caesarean <br />Section</h4>
                                </div>
                                <div className="content">
                                    <p className="mb-4">Lower Segment Caesarean Section (LSCS) procedures are performed with the utmost care and precision.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="service-item mb-4">
                                <div className="icon d-flex align-items-center">
                                    {/* <i className="icofont icofont-heart-beat-alt text-lg"></i> */}
                                    <img src="public/icons/gynecological-treatment.png" style={{ width: '50px', height: '50px' }} alt="Gynecological Procedures" className="img-fluid" />
                                    <h4 className="mt-3 mb-3">Gynecological Procedures</h4>
                                </div>
                                <div className="content">
                                    <p className="mb-4">Specializing in minimally invasive procedures like Laparoscopic Tubal Ligation and Myomectomy.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="service-item mb-4">
                                <div className="icon d-flex align-items-center">
                                    {/* <i className="icofont icofont-tooth text-lg"></i> */}
                                    <img src="public/icons/Hysterectomy.png" style={{ width: '50px', height: '50px' }} alt="Hysterectomy" className="img-fluid" />
                                    <h4 className="mt-3 mb-3">Hysterectomy Procedures</h4>
                                </div>
                                <div className="content">
                                    <p className="mb-4">Offering both Abdominal and Laparoscopic Hysterectomy options, tailored to meet each patient's unique needs.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="service-item mb-4">
                                <div className="icon d-flex align-items-center">
                                    <i className="icofont icofont-brain-alt text-lg"></i>
                                    <h4 className="mt-3 mb-3">Other Procedures</h4>
                                </div>
                                <div className="content">
                                    <p className="mb-4">Also performs Cervical Stitch, Dilatation and Evacuation, Check Curettage, and Tubal Recanalization.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}

export default Services;