import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Organizations from "../../containers/organizations/Organizations";
import Education from "../../containers/education/Educations";
import Certifications from "../../containers/certifications/Certifications";
import TopButton from "../../components/topButton/TopButton";
import "./TechComponent.css";

class Skills extends Component {
  render() {
    return (
      <div className="skills-main">
        <Header theme={this.props.theme} />
        <Organizations theme={this.props.theme} />
        <Education theme={this.props.theme} />
        <Certifications theme={this.props.theme} />
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Skills;
