import React from 'react'
import img1 from './images/img1.png';
import img2 from './images/img2.png';
import img3 from './images/img3.png';
import './styles.css';

function Testimonial() {
    return (
        <section className="testimonial" id="testimonial">
            <div className="container">
                <h3 className="heading"><span>'</span> Testimonial <span>'</span></h3>
                <div className="box-container">
                    <div className="box" data-aos="fade-right" data-aos-duration="1000">
                        <p>We are satisfied with the treatment. Dr. Anshul's communication with patient is very good, we are really satisfied. Thank you!!!!!<br/><br/></p>
                        <h3>Shama shaikh,</h3>
                        <span>Jul 25, 2019</span>
                        <img src={img2} alt="" />
                    </div>
                    <div className="box" data-aos="fade-up" data-aos-duration="1000"> 
                        <p>Friendly staffs and doctors. We visited for cataract surgery and it was done smoothly. Wait time is little bit more here, otherwise it’s a very nice hospital for any eye related issues.</p>
                        <h3>Sachchita Arya</h3>
                        <span>Jan 5, 2021</span>
                        <img src={img1} alt="" />
                    </div>
                    <div className="box" data-aos="fade-left" data-aos-duration="1000">
                        <p>DR. Anshul Is Good, Very good treatment, Excellent staff. Thank you to Shree Ram Hospital.<br/><br/></p>
                        <h3>Jayanti garad</h3>
                        <span>Jan 10, 2022</span>
                        <img src={img3} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial
