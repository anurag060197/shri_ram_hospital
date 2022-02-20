import React from 'react';
import "./styles.css";
import CallIcon from '@material-ui/icons/Call';

const eye_care_services1 = {
    Cataract: [
        "Bandage free topical phaco surgery",
        "Advance premium lenses like multifocal, toric & trifocal lenses available",
        "State of art technology for IOL power calculation, preoperative evaluation & OT",
        "Most advanced phaco surgery without admission (day care surgery)"
    ],
    Glaucoma: [
        "Effective diagnosis and expert care",
        "NCT (noncontact tonometer)",
        "Gonioscopy",
        "OCT",
        "Fundus photography",
        "ND yag laser",
        "Surgical treatment"
    ],
    Orbit_and_oculoplasty: [
        "DCR surgery",
        "Ptosis repair",
        "Orbit surgery"
    ],
    Cornea: [
        "Specific diagnosis and treatment of corneal & scleral infections"
    ]
}
const eye_care_services2 = {
    Pediatric_eye_care: [
        "Squint correction",
        "Comprehensive ophthalmic evaluation of children",
        "Myopia clinic (low vision clinic)",
        "Amblyopia clinic"        
    ],
    Vitreo_retina: [
        "Fundus photography",
        "OCT",
        "Green laser (laser photocoagulation)",
        "Intravitreal injection"        
    ],
    Refractive_services: [
        "Experienced optometrist with dedicated refraction room",
        "Advance autorefractometer",
        "Contact lens services",
        "ICL surgery"
    ],
    Optical_services: [
        "Wide range of frames & branded lens",
        "Contact lens"
    ]
}

const diagnostic_services = ["Fully automated laboratory", 
    "Fast, accurate & affordable tests", 
    "Biochemistry: LFT, KFT, lipid profile & other biochemical tests",
    "Hematology: automated hematology analyzer, coagulation analyzer, HbA1c, sickling, reticulocyte",
    "Serology",
    "Clinical pathology: urine & body fluids R/M, semen analysis",
    "Hormone analysis",
    "Electrolytes",
    "Cytology: FNA, PAP, fluid cytology",
    "Microbiology: urine, pus, blood C/S, grams stain, KOH mount, Sputum for AFB",
    "Health packages"
]

const sugar_services = ["Consultation - By expert",
    "Sugar check - Blood sugar levels (F/R/PP)",
    "Cardiac check - BP screening, lipid profile",
    "Pathology - Hematology, Urine, Kidney function, Special Diabetes Panel",
    "Diabetic Retinopathy Screening",
    "Diet consultation"
]

const dental_services = ["Child dentistry",
    "General dentistry",
    "Teeth whitening & cleaning",
    "Orthodontics (braces)",
    "Cosmetic dentistry",
    "Crown & bridges",
    "Dental implants",
    "Smile designing",
    "Dental X-ray & full mouth X-ray (OPG)"
]

function Service_card() {
    return (
        <div className="card-container">
            <div className="card-body" id='eye-care-service' data-aos="fade-right" data-aos-duration="1000">
                <h5 className="card-title"><b>Eye care services</b></h5>
                {Object.keys(eye_care_services1).map((arr, i) =>{
                    return (
                        <>
                            <p key={i}><b>{arr} : </b></p>
                            {eye_care_services1[arr].map((ele, index)=>{
                                return (<p key={index}>&#10004; {ele}</p>)
                            })}
                        </>)
                })}
            </div>
            <div className="card-body" data-aos="fade-left" data-aos-duration="1000">
                <div>
                    <h5 className="card-title"><b>Eye care services</b></h5>
                    {Object.keys(eye_care_services2).map((arr, i) =>{
                        return (
                            <>
                                <p key={i}><b>{arr} : </b></p>
                                {eye_care_services2[arr].map((ele, index)=>{
                                    return (<p key={index}>&#10004; {ele}</p>)
                                })}
                            </>)
                    })}
                </div>
                <div>
                    <span><CallIcon style={{ width: 40, height: 40 }}/> Book Appointment <a href="tel:7999186566"> 7999186566</a></span>
                </div>
            </div>
            <div className="card-body" id='diagnostic-service' data-aos="fade-right" data-aos-duration="1000">
                <div>
                    <h5 className="card-title"><b>Diagnostic services</b></h5>
                    {diagnostic_services.map((ele, index)=>{
                        return (<p key={index}>&#10004; {ele}</p>)
                    })}
                </div>
                <div>
                    <span><CallIcon style={{ width: 40, height: 40 }}/> Book Appointment <a href="tel:7415959419"> 7415959419</a></span>
                </div>
            </div>
            <div className="card-body" id='sugar-service' data-aos="fade-left" data-aos-duration="1000">
                <div>
                    <h5 className="card-title"><b>Sugar services</b></h5>
                    {sugar_services.map((ele, index)=>{
                        return (<p key={index}>&#10004; {ele}</p>)
                    })}
                </div>
                <div>
                    <span><CallIcon style={{ width: 40, height: 40 }}/> Book Appointment <a href="tel:7999186566"> 7999186566</a></span>
                </div>
            </div>
            <div className="card-body" id='dental-service' data-aos="zoom-in" data-aos-duration="1000">
                <div>
                    <h5 className="card-title"><b>Dental services</b></h5>
                    {dental_services.map((ele, index)=>{
                        return (<p key={index}>&#10004; {ele}</p>)
                    })}
                </div>
                <div>
                    <span><CallIcon style={{ width: 40, height: 40 }}/><span> Book Appointment</span> <a href="tel:8770776558"> 8770776558</a></span>
                </div>
            </div>
        </div>
    )
}

export default Service_card
