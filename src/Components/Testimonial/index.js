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
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur accusantium error numquam dolore atque. Atque totam ad sint ducimus! Maxime!</p>
                        <h3>someone's name</h3>
                        <span>jan 5, 2021</span>
                        <img src={img1} alt="" />
                    </div>
                    <div className="box" data-aos="fade-up" data-aos-duration="1000">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur accusantium error numquam dolore atque. Atque totam ad sint ducimus! Maxime!</p>
                        <h3>someone's name</h3>
                        <span>jan 7, 2021</span>
                        <img src={img2} alt="" />
                    </div>
                    <div className="box" data-aos="fade-left" data-aos-duration="1000">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur accusantium error numquam dolore atque. Atque totam ad sint ducimus! Maxime!</p>
                        <h3>someone's name</h3>
                        <span>jan 10, 2021</span>
                        <img src={img3} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial
