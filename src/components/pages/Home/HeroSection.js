import React from "react";
import "./HeroSection.css";
import Button from "../../controls/Button";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";

function HeroSection() {
  return (
    <div className="hero">
      <div className="hero-shadow"></div>
      <div className="hero-container" id="hero-container">
        {/* <video src="/videos/video-2.mp4" autoPlay loop muted /> */}

        <h1>Lefkoşa Taksiye Hoşgeldiniz</h1>
        <h2>Hızlı, Özel ve Uygun fiyatlı</h2>

        <div className="hero-btns">
          <Button
            heroBtns="heroBtnsSpec"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            href="tel:+90 533 863 94 43"
          >
            Bizi Ara
            <span className="icon">
              <PhoneIcon />
            </span>
          </Button>
          <Button
            heroBtns="heroBtnsSpec"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
            href="https://wa.me/905338639443"
          >
            WhatsApp
            <span className="icon">
              <WhatsAppIcon />
            </span>
          </Button>
          <div
            onClick={() => {
              document
                .getElementById("inner-container2")
                .scrollIntoView({ block: "center", behavior: "smooth" });
              // window.scrollBy(0, window.innerHeight / 1.11);
            }}
            className="scroll-down"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
