import React from "react";
import "./Footer.css";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src="https://myonvent.com/public/img/no-index-assets/curve-first-hero.svg" alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>mohammadtasib3@gmail.com</span>
        <div className="f-icons">
          <Insta color="white" size={"3rem"} />
          <a href="https://www.facebook.com/ohidul.alam.33671/" target="_blank" rel="noreferrer" >
          <Facebook color="white" size={"3rem"} />
          </a>
          <a href="https://github.com/MdTasib" target="_blank" rel="noreferrer" >
          <Gitub color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
