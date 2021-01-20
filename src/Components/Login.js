import React, { Fragment } from "react";
import "../css/app.scss";
import "../css/style.scss";

class Login extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="login-wrapper">
          <form className="box login-box">
            <div className="field">
              <label className="label">Username</label>
              <div className="control">
                <input className="input" type="email" placeholder="Username" />
              </div>
            </div>

            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input
                  className="input"
                  type="password"
                  placeholder="Password"
                />
              </div>
            </div>

            <div class="control">
              <button class="button is-fullwidth is-primary">Submit</button>
            </div>
          </form>
        </div>
        {/*
            JSX is simular to html but some commanend keyword is different.
            Fragment = accpet JSX can have more than one same level tag. After added "Fragment", there is not limit to add same level tag (cite at Line: 6,21).
            For adding comments insde JSX area, you must add type like this (cite at Line: 16, 20). 
            Remember to export the Component (cite Line: 27).
        */}
      </Fragment>
    );
  }
}

export default Login;
