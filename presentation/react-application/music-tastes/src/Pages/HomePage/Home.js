import { Component } from "react";
import "./Home.scss";
import NavigationBar from "./Navbar";
import PageContent from "./HomeContent";

class WelcomePage extends Component {
  render() {
    return (
      <div className="mainHomePageContainer" id="home">
        <NavigationBar />
        <PageContent />
      </div>
    );
  }
}

export default WelcomePage;
