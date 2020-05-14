import React, { Component } from "react";
import "./Home.scss";
import Hero from "../../components/home/hero";
import Footer from "../../components/home/footer";

import { getUserProfileData, getProjects } from "../../services/userService";

class Home extends Component {
  //The userdata should be upload in the login process
  state = {
    userId: 1,
    profile: {},
    education: {},
    experience: {},
    projects: {},
  };

  async componentDidMount() {
    const id = this.state.userId;
    const { data: profile } = await getUserProfileData(id);
    const { data: projects } = await getProjects(id);

    this.setState({
      profile,
      projects,
    });
  }

  handldeClickMenu = (item) => {
    const ref = item.ref;
    const element = document.getElementById(ref);
    if (element) {
      const top = element.getBoundingClientRect();
      window.scrollTo(0, top.y);
    }
  };

  render() {
    return (
      <div className="home">
        <Hero />
        <Footer
          data={{
            contact: this.state.profile.contactInfo,
            projects: this.state.projects,
          }}
        />
      </div>
    );
  }
}

export default Home;
