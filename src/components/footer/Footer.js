import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
/* import { greeting } from "../../portfolio.js";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          Feel free to connect for collaboration, research, or job
          opportunities. I’d love to hear from you!
          <span /> 📧 <span /> alexis.i.abellar@gmail.com
        </p>
        {/* <ToggleSwitch theme={props.theme} onToggle={props.onToggle}/> */}
      </Fade>
    </div>
  );
}
