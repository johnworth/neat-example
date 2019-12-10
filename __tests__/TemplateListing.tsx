import React from "react";
import ReactDOM from "react-dom";
import TemplateListingTest from "../stories/TemplateListing.stories";

it("renders Template Listing without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<TemplateListingTest />, div);
  ReactDOM.unmountComponentAtNode(div);
});
