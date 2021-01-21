import React, { Fragment } from "react";
import "css/app.scss";
import "css/style.scss";

class Header extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="header">
          <div className="grid">
            <div className="start">
              <a href="/">Home</a>
            </div>
            <div className="end">
              <a href="/">Login</a>
              <a href="/">Register</a>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Header;
