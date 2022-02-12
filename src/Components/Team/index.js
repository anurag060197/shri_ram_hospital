import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";
import { Avatar } from "@material-ui/core";
import leftArrow from "./icons/left-arrow.svg";
import rightArrow from "./icons/right-arrow.svg";
import img1 from './images/img1.jpeg';
import img2 from './images/img2.jpeg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.jpg';

const team1 = {
  name: "Dr. Ayush Singh",
  position: ", BDS, Implantologist",
  description: "Dr. Ayush Singh is a Dental Surgeon and Implantologist at Shree Ram Hospital, Manendragarh (C.G.). He has done his BDS from RCDSR, Bhilai and internship from Govt Dental College, Raipur. His area of interest is implantology and endodontics. He is a certified Implantologist from CSM, Korea. He has done many full mouth implant cases successfully and more than 3000 Root Canal Treatments (RCTs) till now. He has 7 years of experience and also practiced at various well known Dental Hospital in Raipur."
}
const team2 = {
  name: "Dr. Namita Singh",
  position: ", BDS (BHU), Cosmetic Dental Surgeon",
  description: "Dr. Namita Singh, Cosmetic Dental Surgeon at Shree Ram Hospital, Manendragarh (C.G), has done her BDS from prestigious institution Banaras Hindu University, Varanasi. She has been practicing for past 4 years and her field of interest is Dentistry, Cosmetic Dentistry and endodontics"
}
const team3 = {
  name: "Dr. Sneha Singh",
  position: ", MBBS, MS, FID",
  description: "Dr. Sneha Singh, consultant diabetologist & Pathologist at Shree Ram Hospital, Manendragarh (C.G), has done her MBBS from Govt Medical College, Rewa and post-graduation (MD) in Pathology from Indore. She has pursued fellowship in Diabetes from prestigious Apollo Hospital, New Delhi. She has 6 years of experience in treating diabetes patients. She has special expertise & interest in field of Cytology & hematology."  
}
const team4 = {
  name: "Dr. Anshul Singh",
  position: ", MBBS, DOMS",
  description: "Dr. Anshul Singh is working as Director & Cheif surgeon at Shree Ram Hospital & eye care center, Manendragarh (C.G). After his MBBS from Govt Medical College, Jabalpur, he did his post-graduation from Govt Medical College, Rewa and fellowship in anterior segment and IOL from the prestigious Aravind Eye Hospital, Coimbatore. He has served as senior consultant at Vasan Eye care and MGM eye hospital, Raipur. He has a vast experience in phaco surgeries, refractive surgeries and glaucoma surgeries."
}
const Team = () => {
  return (
    <section id="team">
        <div className="team" style={{ display: "flex", justifyContent: "center", marginTop: 50, marginBottom: 50}} >
          <div style={{ width: "50%", textAlign: "center" }}>
            <h1 style={{ marginBottom: 20 }}>' Meet the Team '</h1>
            <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots>
              <Card img={img4} name={team4.name} position={team4.position} description={team4.description}/>
              <Card img={img3} name={team3.name} position={team3.position} description={team3.description}/>
              <Card img={img1} name={team1.name} position={team1.position} description={team1.description}/>
              <Card img={img2} name={team2.name} position={team2.position} description={team2.description}/>
            </Slider>
          </div>
      </div>
    </section>
  );
};

const Card = ({ img, name, position, description }) => {
  return (
    <div style={{display: "flex", alignItems: "center", flexDirection: "column", textAlign: "center", color: "gray"}} >
      <Avatar imgProps={{ style: { borderRadius: "50%" } }} src={img} style={{width: 120, height: 120, border: "1px solid lightgray", padding: 7, marginBottom: 20}} />
      <p>{description}</p>
      <p style={{ fontStyle: "italic", marginTop: 15 }}>
        <span style={{ fontWeight: 500, color: "green" }}>{name}</span>{position}
      </p>
    </div>
  );
};

const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <img src={leftArrow} style={{ color: "gray", fontSize: "45px" }} alt="left-arrow"/>
    </div>
  );
};

const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <img src={rightArrow} style={{ color: "gray", fontSize: "45px" }} alt="right-arrow"/>
    </div>
  );
};
export default Team;