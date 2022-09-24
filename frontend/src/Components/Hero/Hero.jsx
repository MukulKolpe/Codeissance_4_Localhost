import React, { useEffect } from "react";
import "./Hero.css";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import bgImage from "../../Assets/image.png";
const Hero = () => {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div class="outerBody">
      <div data-aos="fade-up" class="heroSection">
        <div class="heroTxt">
          <h1>Create your Identity Now!</h1>
          <button class="heroBtn" onClick={() => navigate("/upload")}>
            Start Now
          </button>
        </div>
        <div class="heroImg">
          <img src={bgImage}></img>
        </div>
      </div>
    </div>
  );
};

export default Hero;
