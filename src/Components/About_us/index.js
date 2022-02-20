import React from 'react'
import "./styles.css"
import img from './Images/Profile.jpg'

function About_us() {
    return (
        <div className="about-section" id="about-us">
            <h3 className="heading"><span>'</span> About Us<span>'</span></h3>
            <div className="about-container">
                <div className="about-image" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                    <img src={img} />
                </div>
                <div className="about-body" data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                    <div className="content">
                        <p>
                            Founded in 2014 by doctor Anshul Singh, Shree Ram hospital has come a long way from its beginning. Shree Ram hospital is known for providing a quality healthcare and valuable experience to the patient. Our healthcare offerings are supported by a team of compassionate and dedicated medical professionals who are well experienced in their respective domains.
                            Shree Ram hospital, a healthcare landmark has been name to in field of eye care in Manendragarh and surroundings.
                            It is indeed a great privilege for me and my team to present Shree Ram Hospital. we bring the experience of more than a decade in delivering affordable health care services in a patient friendly environment, with strong belief in ethical and transparent medical practices
                            Shree Ram hospital has established itself as a comprehensive eye care alongwith medical, diagnostic and dental care system in Manendragarh providing multidisciplinary services to population of not only Manendragarh but also to Surajpur, Anuppur and Pendra
                            We offer a blind of finest medical and surgical skill delivered with compassion and a patient centric approach, within the reach of everyone.
                        </p>
                        <p><b>VISION-</b> Shree ram hospital & eye care center strives to provide world class eye care services under one roof.</p>
                        <p><b>MISSION-</b> To provide servies of the highest possible standards with quality, safety and reliability by a dedicated team of competent, skilled and committed professionals for all.</p>
                        <p><b>VALUES-</b> Integrity, compassion and commitment for patient care</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About_us
