import React from "react";
import "./AboutUs.css";
// import '../App.css'

const AboutUs = () => {
  return (
    <div className="about">
      <div className="about-container2">
        <div id="inner-container2" className="inner-container2">
          {/* <div className="inner2-title-container">
            <h1>-------------</h1>
          </div> */}
          <div className="inner2-wrapper">
            <div className="inner2-story-container">
              <h2>Lefkoşa Taksi Hizmetleri</h2>
              <p>
                Lefkoşa’da Şehir İçi Ve Şehir Dışı 7/24 Saat Taksi Hizmeti
                Vermekteyiz. Size Yardımcı Olabilmemiz İçin Bize Ulaşmanız
                Yeterli Olacaktır.
              </p>
            </div>
            {/* <AboutUsImg /> */}
            <div
              onClick={() => {
                document
                  .getElementById("blog")
                  .scrollIntoView({ block: "start", behavior: "smooth" });
                // window.scrollBy(0, window.innerHeight / 1.11);
              }}
              className="scroll-down2"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
