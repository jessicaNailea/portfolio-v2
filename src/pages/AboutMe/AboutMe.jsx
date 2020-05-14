import React, { Component } from "react";
import AboutMe from "../../components/aboutMe";
import "./AboutMe.scss";

import { getUserProfileData } from "../../services/userService";

class AboutMePage extends Component {
  state = {
    userId: 1,
    profile: {},
  };

  async componentDidMount() {
    const id = this.state.userId;
    const { data: profile } = await getUserProfileData(id);

    this.setState({
      profile,
    });
  }
  render() {
    return <AboutMe data={this.state.profile} />;
  }
}

export default AboutMePage;
