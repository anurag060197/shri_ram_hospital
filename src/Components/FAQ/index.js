import React, {useState} from 'react'
import "./styles.css"
import Chevron from './chevron.svg'

const faqData = [
    {
        question: "How often should I need to test my eyes?",
        answer: "As per the American Optometric Association adults who wear glasses or contact lenses and adults who are over 60 years should visit their eye care specialist every year or as suggested by the doctor. If the person doesn't require any vision correction, then a person between 18 to 60 years should visit the doctor twice a year."
    },
    {
        question: "How accurate are lab tests?",
        answer: "Lab test results are useful to the health care practitioner only if the results are accurate, precise and timely. An accurate test result is one that closely corresponds to its true value. In other words, the results of a particular test should be consistently reliable from patient to patient and from one time to next."
    },
    {
        question: "What is Cataract?",
        answer: "The cataract is an eye condition that causes cloudiness of the lenses in your eye. This prevents the light from passing to the ratina, causing blurred or poor vision. Like your age, you develop cataract naturally. Sometimes, the cloudiness is very small, and it's ahrd to notice. However, in it's advanced stage, you may feel like you are like constantly viewing the world through a foggy window."
    },
    {
        question: "I work on a computer all day. Can this hurt my eyes?",
        answer: "Computer monitors emit radiation lower that the maximum allowed for safe. But you shouldtry to give rest of 5-10 minutes to your eyes to prevent them from eye strain."
    },
    {
        question: "I have diabetes and my vision is decresing rapidly. How you can help me?",
        answer: "Diabetes is a lifelong condition and its management because it can lead to Cataract, Glaucoma and diabetes retinopathy. Visit our hospital for more information on Diabetes eye care."
    },
    {
        question: "Do I need surgery for Cataract? How would I know that?",
        answer: "Yes, you need to undergo surgery for removing the cataract from your eye. You have to consult an eye doctor first. He or she will conduct various tests, review your complete medical history for determining whether you need a vision correctional surgery or not."
    }
]

export default function FAQ() {
    const [toggleArr, setToggleArr] = useState([false, false, false, false, false, false])

    const toggleState = (index) => {
        let copyToggleArr = [...toggleArr];
        copyToggleArr[index] = !copyToggleArr[index];
        setToggleArr(copyToggleArr);
    }

    return (
        <section id="faq">
            <h3 className="heading"><span>'</span> FAQ <span>'</span></h3>
            <div className="faq-container">
                {faqData.map((obj, index)=>{
                    return (
                        <div className="faq" id="faq" key={index} data-aos="zoom-in" data-aos-duration="1000">
                            <button onClick={()=>toggleState(index)} className="faq-visible">
                                <span>{obj.question}</span>
                                <img className={toggleArr[index] ? "active" : undefined} src={Chevron} alt='arrow-img'/>
                            </button>
                            <div className={toggleArr[index] ? "faq-toggle animated" : "faq-toggle"} style={{height: toggleArr[index] ? `auto` : "0px", backgroundColor: toggleArr[index] ? '#f1f1f1' : null}} >
                                <p aria-hidden={toggleArr[index] ? "true" : "false"}>{obj.answer}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}