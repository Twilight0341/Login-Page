import React from "react";
import ReactDOM from "react-dom";
import Login from "./Components/Login";
import App from "./Components/App";

ReactDOM.render(<App />, document.getElementById("root"));

/*
To create a compomemt and render on website by using React, You must be following this step:
         
         Step 1: Create a file "index.js" in folder "src"

         Step 2: Import "React" and "React-DOM" (cite at Line: 1,2)
         
         Step 3: Import the component's js file (cite at Line 3)

         Step 4: Render components by React-DOM (cite at Line: 5) "ReactDOM.render(<[component name] />, document.getElementById("[div class name at index.html]"));"
*/
