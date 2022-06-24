import { Component } from "react";
import "./HomeContent.scss";
import { PrimaryButton } from "../../Components/Button/Button";
import homePgIllustration1 from "../../Static/homePgIllustration1.svg";

class PageContent extends Component {
  render() {
    return (
      <div className="pageContentContainer">
        <HomePageIllustration illustrationSrc={homePgIllustration1} />
        <HomePageContent />
      </div>
    );
  }
}

class HomePageIllustration extends Component {
  render() {
    return (
      <div className="homePageIllustrationContainer">
        <img src={this.props.illustrationSrc} alt="Home page illustration" />
      </div>
    );
  }
}

class HomePageContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      welcomeMessage: "What to know who you’re listening to too much?",
      buttonLabel: "Let’s get started",
      buttonClickHandler: () => {},
    };
  }
  render() {
    return (
      <div className="homePageContentContainer">
        <MusicTastesLargeLogo />
        <MusicTastesWelcomeMessage welcomeMessage={this.state.welcomeMessage} />
        <PrimaryButton
          buttonClickHandler={this.state.buttonClickHandler}
          buttonValue={this.state.buttonLabel}
        />
      </div>
    );
  }
}

class MusicTastesLargeLogo extends Component {
  render() {
    return (
      <div className="musicTastesLargeLogoContainer">
        <p>Music Tastes</p>
      </div>
    );
  }
}

class MusicTastesWelcomeMessage extends Component {
  render() {
    return <p id="musicTastesWelcomeMessage">{this.props.welcomeMessage}</p>;
  }
}

export default PageContent;
