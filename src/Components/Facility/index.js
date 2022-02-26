import React from 'react';
import './styles.css';
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpeg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.jpg';
import img5 from './images/img5.jpeg';
import img6 from './images/img6.jpeg';
import img7 from './images/img7.jpeg';
import img8 from './images/img8.jpg';
import img9 from './images/img9.jpeg';

// install fancyapp -> npm install @fancyapps/ui
// include fancybox.js file
import Fancybox from "./fancybox.js";
// Remember to include the corresponding CSS file in fancybox.js file
// import "@fancyapps/ui/dist/fancybox.css";

function Facility() {
    return (
        <section className="facility" id="facility">
            <div className="container">
                <h1 className="heading"> ' Work Gallery ' </h1>
                <div className="box-container">
                    <Fancybox>
                        <div className="box" data-aos="zoom-in" data-aos-duration="1000">
                            <a data-fancybox="gallery" href={img1} title="our team">
                                <img src={img1} alt="img1" />
                            </a>
                        </div>
                        <div className="box" data-aos="zoom-in" data-aos-duration="1000">
                            <a data-fancybox="gallery" href={img2} title="our lab">
                                <img src={img2} alt="img2" />
                            </a>
                        </div>
                        <div className="box" data-aos="zoom-in" data-aos-duration="1000">
                            <a data-fancybox="gallery" href={img3} title="emergency rooms">
                                <img src={img3} alt="img3" />
                            </a>
                        </div>
                        <div className="box" data-aos="zoom-in" data-aos-duration="1000">
                            <a data-fancybox="gallery" href={img4} title="expert doctors">
                                <img src={img4} alt="img4" />
                            </a>
                        </div>
                        <div className="box" data-aos="zoom-in" data-aos-duration="1000">
                            <a data-fancybox="gallery" href={img5} title="expert doctors">
                                <img src={img5} alt="img5" />
                            </a>
                        </div>
                        <div className="box" data-aos="zoom-in" data-aos-duration="1000">
                            <a data-fancybox="gallery" href={img6} title="emergency rooms">
                                <img src={img6} alt="img6" />
                            </a>
                        </div>
                        <div className="box" data-aos="zoom-in" data-aos-duration="1000">
                            <a data-fancybox="gallery" href={img7} title="expert doctors">
                                <img src={img7} alt="img7" />
                            </a>
                        </div>
                        <div className="box" data-aos="zoom-in" data-aos-duration="1000">
                            <a data-fancybox="gallery" href={img8} title="emergency rooms">
                                <img src={img8} alt="img8" />
                            </a>
                        </div>
                        <div className="box" data-aos="zoom-in" data-aos-duration="1000">
                            <a data-fancybox="gallery" href={img9} title="enough beds">
                                <img src={img9} alt="img9" />
                            </a>
                        </div>
                    </Fancybox>
                </div>
            </div>
        </section>
    )
}

export default Facility;