import React from "react";
import "./Skills.css";
import SkillSection from "./SkillSection";
import { Fade } from "react-reveal";

export default function Skills(props) {
  const theme = props.theme;
  return (
    <div className="main" id="skills">
      <div className="skills-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="skills-header" style={{ color: theme.text }}>
            <span role="img" aria-label="sparkles">
              ✨
            </span>{" "}
            What I Bring{" "}
            <span role="img" aria-label="sparkles">
              ✨
            </span>
          </h1>
          <p
            style={{
              fontSize: "20px",
              lineHeight: "1.6",
              color: theme.secondaryText,
              textAlign: "center",
              marginTop: "20px",
            }}
          >
            I explore real-world problems through the lens of mathematics, data,
            and business logic.
            <br />
            With a foundation in actuarial science and data analysis, I focus
            on:
          </p>
        </Fade>
      </div>
      <SkillSection theme={theme} />
    </div>
  );
}
