import React from "react";
import PropTypes from "prop-types";

import "./Display.css";

//Change this from class component to functional component.
export default class Display extends React.Component {
  static propTypes = {
    value: PropTypes.string,
  };

  render() {
    return (
      <div className="component-display">
        <div>{this.props.value}</div>
      </div>
    );
  }
}
