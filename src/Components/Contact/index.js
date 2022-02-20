import React from 'react'
import './styles.css';
import CallIcon from '@material-ui/icons/Call';
import map from "./Imgs/map.png"

function Contact() {
    return (
        <section className="contact" id="contact">
            <div className="row">
                <div className="col-md-4" data-aos="fade-right" data-aos-duration="1000">
                    <a href="#" id="contact-anchor"><img className="contact-logo" src="./LOGO.jpg" alt="Logo" /> <strong><span>S</span></strong>hree <strong><span>R</span></strong>am <strong><span>H</span></strong>ospital</a>
                    <span className="contact-span"><b>VISION-</b> Shree ram hospital & eye care center strives to provide world class eye care services under one roof.</span><br/>
                    <span className="contact-span"><b>MISSION-</b> To provide servies of the highest possible standards with quality, safety and reliability by a dedicated team of competent, skilled and committed professionals for all.</span><br/>
                    <span className="contact-span"><b>VALUES-</b> Integrity, compassion and commitment for patient care</span>
                </div>
                <div className="col-md-4 text-center" data-aos="fade-up" data-aos-duration="1000">
                    <h3><CallIcon style={{ width: 40, height: 40, color: 'white' }}/> Contact Us</h3>
                    <a href="tel:7999186566"><strong>Eye Care Service:</strong> 7999186566</a>
                    <a href="tel:7415959419"><strong>Diagnostic Service:</strong> 7415959419</a>
                    <a href="tel:7999186566"><strong>Sugar Service:</strong> 7999186566</a>
                    <a href="tel:8770776558"><strong>Dental Service:</strong> 8770776558</a>
                    <a href="mailto:srh.mdgr@gmail.com"><strong>Email:</strong><span id="contact-mail"> srh.mdgr@gmail.com</span></a>
                    <a href="https://www.google.com/maps/place/Shreeram+Hospital+%26+Eye+Care+Center/@23.2099807,82.2021081,17.78z/data=!4m5!3m4!1s0x39862abd2235bb27:0x8b01c03e322d1696!8m2!3d23.21013!4d82.20238" target="_blank">
                        <strong>Address:</strong> Ring road, Manendragarh, Koriya, Chhattisgarh
                    </a>
                </div>
                <div className="col-md-4 text-center" data-aos="fade-left" data-aos-duration="1000">
                    <a href="https://www.google.com/maps/place/Shreeram+Hospital+%26+Eye+Care+Center/@23.2099807,82.2021081,17.78z/data=!4m5!3m4!1s0x39862abd2235bb27:0x8b01c03e322d1696!8m2!3d23.21013!4d82.20238" target="_blank">
                        <img className="contact-map" src={map} alt="google map"/>
                    </a>
                </div>
            </div>
            <h5 className="credit text-center mx-auto">created by <span style={{color: "orange", fontWeight: "bold"}} >J</span><span style={{color: "white", fontWeight: "bold"}}>H</span><span style={{color: "green", fontWeight: "bold"}}>S</span> | all rights reserved.</h5>
        </section>
    )
}

export default Contact;