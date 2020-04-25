import React from "react";
import { render } from "react-dom";

function Test() {
  //debugger; //neat trick, to set a breakpoint and use the sourcemap on the browser devTools
  return <p>Test</p>;
}

render(<Test />, document.getElementById("app"));
