import React, { Component } from "react";
import Experience from "../../components/experience";
import "./Experience.scss";

import { getExperience } from "../../services/userService";

class WorkExperience extends Component {
  state = {
    userId: 1,
    experience: {},
  };

  async componentDidMount() {
    const id = this.state.userId;
    const { data: experience } = await getExperience(id);

    this.setState({
      experience,
    });
  }

  render() {
    return <Experience data={this.state.experience} />;
  }
}

export default WorkExperience;
