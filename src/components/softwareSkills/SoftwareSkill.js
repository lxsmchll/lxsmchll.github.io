import React from "react";
import "./SoftwareSkill.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

class SoftwareSkill extends React.Component {
  render() {
    return (
      <div>
        <div className="software-skills-main-div">
          <ul className="dev-icons">
            {this.props.logos.map((logo) => {
              return (
                <OverlayTrigger
                  key={logo.skillName || logo.login}
                  placement={"top"}
                  overlay={
                    <Tooltip id={`tooltip-top`}>
                      <strong>{logo.skillName || logo.login}</strong>
                    </Tooltip>
                  }
                >
                  <li
                    className="software-skill-inline"
                    name={logo.skillName || logo.login}
                  >
                    {/* For Font Awesome or Iconify icons */}
                    {logo.fontAwesomeClassname && (
                      <span
                        className="iconify"
                        data-icon={logo.fontAwesomeClassname}
                        style={logo.style}
                        data-inline="false"
                      ></span>
                    )}

                    {/* For direct avatar/image URLs (like avatarUrl from your data) */}
                    {!logo.fontAwesomeClassname && logo.avatarUrl && (
                      <img
                        className="skill-image"
                        style={{
                          width: "40px",
                          height: "40px",
                          objectFit: "contain",
                          ...logo.style,
                        }}
                        src={logo.avatarUrl}
                        alt={logo.skillName || logo.login}
                      />
                    )}

                    {/* For local image files in /public/skills/ */}
                    {!logo.fontAwesomeClassname &&
                      !logo.avatarUrl &&
                      logo.imageSrc && (
                        <img
                          className="skill-image"
                          style={logo.style}
                          src={`${process.env.PUBLIC_URL}/skills/${logo.imageSrc}`}
                          alt={logo.skillName}
                        />
                      )}
                  </li>
                </OverlayTrigger>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default SoftwareSkill;
