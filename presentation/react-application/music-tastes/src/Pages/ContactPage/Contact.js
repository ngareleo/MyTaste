import { Component } from "react";
import "./Contact.scss";
import instagramIcon from "../../Static/instagramIcon.svg";
import linkedinIcon from "../../Static/linkedinIcon.svg";
import twitterIcon from "../../Static/twitterIcon.svg";
import githubLogo from "../../Static/githubLogo.svg";
import facebookIcon from "../../Static/facebookIcon.svg";
import musicTastesLogo from "../../Static/musicTastesLogo.svg";

class ContactPage extends Component {
  render() {
    return (
      <div className="contactPageContainer" id="contact">
        <MusicTastesLogoImage imagePath={musicTastesLogo} />
        <ContactLinks />
      </div>
    );
  }
}

class MusicTastesLogoImage extends Component {
  render() {
    return (
      <div className="musicTastesLogoImageContainer">
        <img src={this.props.imagePath} alt="Yes, we have a logo" />
      </div>
    );
  }
}

class ContactLinks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        {
          imagePath: facebookIcon,
          socialHandle: "Ngareoel",
          socialLink: "https://www.instagram.com/ngareleo_/",
        },
        {
          imagePath: instagramIcon,
          socialHandle: "@ngareoel__",
          socialLink: "https://www.instagram.com/ngareleo_/",
        },
        {
          imagePath: twitterIcon,
          socialHandle: "@NgareOel",
          socialLink: "https://twitter.com/NgareOel",
        },
        {
          imagePath: linkedinIcon,
          socialHandle: "https://linkedin/leo-mwenda",
          socialLink: "https://linkedin/leo-mwenda",
        },
        {
          imagePath: githubLogo,
          socialHandle: "https://github/ngareleo",
          socialLink: "https://github/ngareleo",
        },
      ],
    };
  }

  render() {
    return (
      <div className="contactLinksContainer">
        {this.state.contacts.map((social) => (
          <ContactLinkItem
            socialImage={social.imagePath}
            contactLinkURL={social.socialLink}
            contactLinkLabel={social.socialHandle}
          />
        ))}
      </div>
    );
  }
}

class ContactLinkItem extends Component {
  render() {
    return (
      <div className="contactLinkItemContainer">
        <img
          src={this.props.socialImage}
          style={({ width: "32px" }, { height: "32px" })}
          alt={this.props.contactLinkLabel}
        />
        <a
          id="contactLink"
          href={this.props.contactLinkURL}
          target="_blank"
          rel="noreferrer"
        >
          {this.props.contactLinkLabel}
        </a>
      </div>
    );
  }
}

export default ContactPage;
