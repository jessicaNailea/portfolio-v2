import React, { Component } from "react";
import Education from "../../components/education";
import "./Education.scss";

import { getEducData } from "../../services/userService";

class EducationPage extends Component {
  state = {
    userId: 1,
    education: {},
  };

  async componentDidMount() {
    const id = this.state.userId;
    const { data: education } = await getEducData(id);

    this.setState({
      education,
    });
  }

  render() {
    return <Education data={this.state.education} />;
  }
}

export default EducationPage;
