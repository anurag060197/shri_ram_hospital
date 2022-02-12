import React from 'react'
import './styles.css';
import CallIcon from '@material-ui/icons/Call';

function Contact() {
    return (
        <section className="contact" id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-md-4" data-aos="fade-right" data-aos-duration="1000">
                        <a href="#" className="logo"><img src="./LOGO.jpg" alt="Logo" /> <span>S</span>hri <span>R</span>am <span>H</span>ospital</a>
                        <span className="contact-span"><b>VISION-</b> Shree ram hospital & eye care center strives to provide world class eye care services under one roof.</span><br/>
                        <span className="contact-span"><b>MISSION-</b> To provide servies of the highest possible standards with quality, safety and reliability by a dedicated team of competent, skilled and committed professionals for all.</span><br/>
                        <span className="contact-span"><b>VALUES-</b> Integrity, compassion and commitment for patient care</span>
                    </div>
                    <div className="col-md-4 text-center" data-aos="fade-up" data-aos-duration="1000">
                        <h3>links</h3>
                        <a href="#facility">Our Facility</a>
                        <a href="#testimonial">Our Team</a>
                        <a href="#about-us">About Us</a>
                        <a href="#contact">Contact</a>
                        <a href="#faq">FAQ</a>
                    </div>
                    <div className="col-md-4 text-center" data-aos="fade-left" data-aos-duration="1000">
                        <h3><CallIcon style={{ width: 40, height: 40, color: 'white' }}/> Call Now</h3>
                        <a className="animation" href="tel:+4733378901">Eye Care Service: +4733378901</a>
                        <a className="animation" href="tel:+4733378901">Dental Service: +4733378901</a>
                        <a className="animation" href="tel:+4733378901">Diagnostic Service: +4733378901</a>
                    </div>
                </div>
            </div>
            {/* <h4 className="credit text-center mx-auto">created by <span>mr. web designer</span> | all rights reserved.</h4> */}
        </section>
    )
}

export default Contact


// https://www.google.com/maps/search/?api=1&amp;query=23.166016,%2077.501334