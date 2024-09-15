function About() {
    return (
        <>
            <section class="section about" id='about'>
                <div class="container position-relative">
                    <div class="row">
                        <div class="col-12 col-md-8 col-lg-6">
                            <div class="d-flex flex-column justify-content-center h-100">
                                <h2 class="about-heading">About Dr. Teena</h2>
                                <p class="about-sub-heading my-2">
                                    Dr. Teena is a highly skilled and experienced gynecologist with over 15 years of expertise in women’s health. She obtained her medical degree from JJMMC Davangere, where she graduated with honors, showcasing her dedication to academic excellence.
                                </p>
                                <p class="about-sub-heading my-2">
                                    Dr. Teena completed her MS in Obstetrics and Gynecology from Government College VIMS Bellary, one of the nation’s top-ranked hospitals, where she honed her clinical expertise in gynecology and developed a deep understanding of complex women’s health conditions.
                                </p>
                                <p class="about-sub-heading my-2">
                                Known for her warm bedside manner and empathetic approach, Dr. Teena takes the time to listen to her patients’ concerns and collaborates with them to develop personalized treatment plans. She believes in the importance of holistic care, addressing not only the physical aspects of women’s health but also the emotional and psychological well-being of her patients.
                                </p>
                                <p class="about-sub-heading my-2">
                                In her spare time, Dr. Teena enjoys hiking in the great outdoors and spending quality time with her family. She brings a genuine passion for women’s health and a deep sense of compassion to her practice, earning the trust and admiration of her patients and colleagues alike.
                                </p>
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <div class="d-flex flex-column justify-content-center h-100">
                                {/* <img src="public/teena/Design.png" style={{ flexGrow: 1, width: '100%', height: '100%' }} alt="about img" class="img-fluid about-img" /> */}
                                <img src="public/teena/profile-1.jpg" alt="about img" class="img-fluid about-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;