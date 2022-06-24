import { Component } from "react";
import homePgIllustration2 from "../../Static/homePgIllustration2.svg";
import "./About.scss";

class AboutPage extends Component {
  render() {
    return (
      <div className="aboutPageContainer" id="about">
        <AboutPageInformationCard />
        <AboutPageIllustration illustrationPath={homePgIllustration2} />
      </div>
    );
  }
}

class AboutPageInformationCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutPageTextContent: [
        "Music Tastes uses algorithms to define the taste of your music. We take a peek at the music you listen to on Spotify. Look at the tracks you listen to all the time, the artists and then rate them. How loud is the music? How instrumental is it?",
        "We then take all the numbers and shove them in your face. If you don’t have a Spotify account, Leave.",
        "I’m kidding. Just create an account, listen to some music. Then sit or stand, or something then let us do our magic.",
        "Welcome to MusicTastes and remember to tell a friend. Ciao",
      ],
    };
  }

  render() {
    return (
      <div className="aboutPageInformationCardContainer">
        <p id="informationCardHeader">What is music Tastes?</p>
        <br />
        <p id="informationCardContent">
          {this.state.aboutPageTextContent.map((text) => (
            <Paragraph paragraphText={text} />
          ))}
        </p>
      </div>
    );
  }
}

class AboutPageIllustration extends Component {
  render() {
    return (
      <div className="aboutPageIllustrationContainer">
        <img src={this.props.illustrationPath} alt="Rock on" />
      </div>
    );
  }
}

class Paragraph extends Component {
  render() {
    return (
      <p>
        <br />
        {this.props.paragraphText}
      </p>
    );
  }
}

export default AboutPage;
