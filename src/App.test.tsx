import ReactDOM from "react-dom";
import SamurajJSApp from "./App";
import React from "react"

it("render without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<SamurajJSApp/>, div);
    ReactDOM.unmountComponentAtNode(div)
})