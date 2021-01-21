import React, { Fragment } from "react";
import "../css/app.scss";
import "../css/style.scss";
import Header from "../Components/Header";
import Products from "../Components/Produsts";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="main">
          <Header />
          <Products />
        </div>
      </Fragment>
    );
  }
}

export default App;
