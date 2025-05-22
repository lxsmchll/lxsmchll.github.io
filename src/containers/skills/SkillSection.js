import React, { Component } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";
import WIDDataDriven from "./WIDDataDriven";
import WIDNumerical from "./WIDNumerical";
import WIDOperations from "./WIDOperations";
import WIDTimeSeries from "./WIDTimeSeries";

function GetSkillSvg(props) {
  if (props.fileName === "WIDDataDriven")
    return <WIDDataDriven theme={props.theme} />;
  else if (props.fileName === "WIDNumerical")
    return <WIDNumerical theme={props.theme} />;
  else if (props.fileName === "WIDOperations")
    return <WIDOperations theme={props.theme} />;
  return <WIDTimeSeries theme={props.theme} />;
}

class SkillSection extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        {/* Original dynamic rendering (if you still want to keep it) */}
        {skills.data.map((skill, i) => {
          return (
            <div key={i} className="skills-main-div">
              <Fade left duration={2000}>
                <div className="skills-image-div">
                  <GetSkillSvg fileName={skill.fileName} theme={theme} />
                </div>
              </Fade>

              <div className="skills-text-div">
                <Fade right duration={1000}>
                  <h1 className="skills-heading" style={{ color: theme.text }}>
                    {skill.title}
                  </h1>
                </Fade>
                <Fade right duration={1500}>
                  <SoftwareSkill logos={skill.softwareSkills} />
                </Fade>
                <Fade right duration={2000}>
                  {/* Overview description */}
                  {skill.overview && (
                    <p
                      className="subTitle skills-text"
                      style={{ color: theme.secondaryText }}
                    >
                      {skill.overview}
                    </p>
                  )}

                  {/* Projects */}
                  {skill.projects &&
                    skill.projects.map((proj, i) => (
                      <div key={i} style={{ marginBottom: "1.5em" }}>
                        <h2
                          className="skills-heading"
                          style={{
                            color: theme.text,
                            fontSize: "1.2em",
                            marginTop: "1em",
                          }}
                        >
                          <strong>{proj.title}</strong>
                        </h2>
                        <p
                          className="subTitle skills-text"
                          style={{ color: theme.secondaryText }}
                        >
                          {proj.description}
                        </p>
                        {proj.contributions && (
                          <p
                            className="subTitle skills-text"
                            style={{ color: theme.secondaryText }}
                          >
                            <strong>My Contributions:</strong>{" "}
                            {proj.contributions}
                          </p>
                        )}
                        {proj.link && (
                          <p
                            className="subTitle skills-text"
                            style={{ color: theme.secondaryText }}
                          >
                            <span role="img" aria-label="right arrow">
                              ➡️
                            </span>
                            <a
                              href={proj.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ color: theme.text }}
                            >
                              {proj.linkLabel}
                            </a>
                          </p>
                        )}
                      </div>
                    ))}
                </Fade>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SkillSection;
