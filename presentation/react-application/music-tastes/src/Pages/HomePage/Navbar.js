import { Component } from "react";
import "./Navbar.scss";
import { SecondaryButton } from "../../Components/Button/Button";

class NavigationBar extends Component {
  render() {
    return (
      <div className="navigationBarContainer">
        <MusicTastesLogo />
        <NavigationBarLinks />
      </div>
    );
  }
}

class MusicTastesLogo extends Component {
  render() {
    return (
      <div className="musicTastesLogo">
        <a href={this.props.urlLink} id="logo-content">
          MusicTastes
        </a>
      </div>
    );
  }
}

class NavigationBarLinks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urlLinks: [
        { title: "Home", link: "#home" },
        { title: "About", link: "#about" },
        { title: "Contact", link: "#contact" },
      ],
      signInButton: {
        buttonLabel: "Sign In",
        buttonClickHandler: () => {},
      },
    };
  }

  render() {
    return (
      <div className="nav-bar-links">
        {this.state.urlLinks.map((link) => (
          <NavigationBarLinkItem itemLink={link.link} itemTitle={link.title} />
        ))}
        <SecondaryButton
          buttonClickHandler={() => {}}
          buttonValue={this.state.signInButton.buttonLabel}
        />
      </div>
    );
  }
}

class NavigationBarLinkItem extends Component {
  render() {
    return (
      <div>
        <a href={this.props.itemLink} id="nav-link-item">
          {this.props.itemTitle}
        </a>
      </div>
    );
  }
}

export default NavigationBar;
