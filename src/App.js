import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";

import NavMenu from "./components/IconsMenu";
import Home from "./pages/Home/Home";
import AboutMePage from "./pages/AboutMe/AboutMe";
import WorkExperience from "./pages/Experience/Experience";
import EducationPage from "./pages/Education/Education";
import NotFound from "../src/components/notFound";

const items = [
  {
    title: "Home",
    link: "/home",
  },
  {
    title: "About me",
    link: "/aboutme",
  },
  {
    title: "Work experience",
    link: "/work_experience",
  },
  {
    title: "Education",
    link: "/education",
  },
];

function App() {
  return (
    <React.Fragment>
      <NavMenu items={items} />
      <main className="container">
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/aboutme" component={AboutMePage} />
          <Route path="/work_experience" component={WorkExperience} />
          <Route path="/education" component={EducationPage} />
          <Route path="/not-found" component={NotFound}></Route>
          <Redirect from="/" exact to="/home" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
