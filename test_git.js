import React from "react";
import Im from "../testback.gif";
import "../css/test_git.scss";
import Hy from "../giphy.gif";
import Loo from "../logo-og.png";

var invocation = new XMLHttpRequest();
var url = "http://localhost:5000/";

/*function callOtherDomain() {
  if (invocation) {
    invocation.open("GET", url, true);
    invocation.onreadystatechange = handler;
    invocation.send();
  }
}*/

class TesGif extends React.Component {
  state = {
    loading: false,
    hi: null,
  };

  async componentDidMount() {
    const url = "http://localhost:5000";
    const proxyURL = "http://localhost:3000";
    const respone = await fetch(proxyURL, url);
    const data = await respone.py();
    console.log(data);
  }

  render() {
    return (
      <React.Fragment>
        <div className="background-wrapper">
          <div className="image-box">
            <div className="word-wrapper">
              <div className="word-box">
                {this.state.loading ? (
                  <div className="load"> loading... </div>
                ) : (
                  <div className="person">person...</div>
                )}
                <img src={Im} alt="loading..." />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default TesGif;
