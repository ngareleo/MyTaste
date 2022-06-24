import { Component } from "react";
import "./Button.scss";

class PrimaryButton extends Component {
  render() {
    return (
      <button
        className="primary-button"
        onClick={this.props.buttonClickHandler}
        style={{ padding: "15px 10px", fontSize: "15px" }}
      >
        {this.props.buttonValue}
      </button>
    );
  }
}

class SecondaryButton extends Component {
  render() {
    return (
      <button
        className="secondary-button"
        onClick={this.props.buttonClickHandler}
      >
        {this.props.buttonValue}
      </button>
    );
  }
}

export { PrimaryButton, SecondaryButton };
