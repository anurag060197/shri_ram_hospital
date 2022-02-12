import React, {useEffect, useState} from 'react'
import './styles.css'
import BtnSlider from './BtnSlider'

export default function Slider() {
    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== 4){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === 4){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(4)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    useEffect(()=>{
        const interval = setInterval(()=>{
            nextSlide();
        }, 5000);
        return () => {
            clearInterval(interval);
        }
    })

    return (
        <div className="container-slider">
            {Array.from({length: 4}).map((obj, index) => {
                return (
                    <div key={index} className={slideIndex === index + 1 ? "slide active-anim" : "slide"}>
                        <img src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`} alt='img'/>
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"} />

            <div className="container-dots">
                {Array.from({length: 4}).map((item, index) => (
                    <div onClick={() => moveDot(index + 1)} key={index} className={slideIndex === index + 1 ? "dot active" : "dot"} ></div>
                ))}
            </div>
        </div>
    )
}