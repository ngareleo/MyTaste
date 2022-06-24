import { Component } from "react";
import homeBg from "./Static/homeBg.png";
import Vector1 from "./Static/Vector1.png";
import "./App.scss";
import WelcomePage from "./Pages/HomePage/Home";
import AboutPage from "./Pages/AboutPage/About";
import ContactPage from "./Pages/ContactPage/Contact";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrlPath: homeBg,
      vectorImageUrlPath: Vector1,
    };
  }
  render() {
    return (
      <div className="mainAppContainer">
        <BackgroundGradientImage image={this.state.imageUrlPath} />
        <BackgroundVector image={this.state.vectorImageUrlPath} />
        <PagesContainer>
          <WelcomePage />
          <AboutPage />
          <ContactPage />
        </PagesContainer>
      </div>
    );
  }
}

class BackgroundGradientImage extends Component {
  render() {
    return <img id="bg-gradient-img" src={this.props.image} alt="background" />;
  }
}

class BackgroundVector extends Component {
  render() {
    return <img id="bg-vector-img" src={this.props.image} alt="Vector" />;
  }
}

class PagesContainer extends Component {
  render() {
    return <div className="pages-container">{this.props.children}</div>;
  }
}
export default HomePage;
