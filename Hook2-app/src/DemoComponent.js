import React, { createElement } from "react";

export default () => {
  // return <h1>Demo Component</h1>
  // return React.createElement("h1",null,"Demo Component");
  // return  <div>
  //             <h1>In Demo Component</h1>
  //       </div>
  // return React.createElement(
  //   "div",
  //   null,
  //   React.createElement(
  //     "h1",
  //     { style: { backgroundColor: "red" } },
  //     "In Demo Component"
  //   ),
  //   React.createElement("h1", null, "In Demo Component")
  // );
  //   return (
  //     <div>
  //       <h1>In Demo Component</h1>
  //       <h1>In Demo Component</h1>
  //     </div>
  //   );
  //   return (
  //     <div>
  //       <h1 style={{ backgroundColor: "red" }}>My Heading</h1>
  //       <h2 style={{ backgroundColor: "green" }}>My Sub-Heading</h2>
  //       <div style={{ backgroundColor: "yellow" }}>
  //         <p style={{ backgroundColor: "orange" }}>This is my First Paragraph</p>
  //         <p style={{ backgroundColor: "blue" }}>This is my Second Paragraph</p>
  //       </div>
  //     </div>
  //   );
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      { style: { backgroundColor: "red" } },
      "MyHeading"
    ),
    React.createElement(
      "h2",
      { style: { backgroundColor: "green" } },
      "My Sub-Heading"
    ),
    React.createElement(
      "div",
      { style: { backgroundColor: "yellow" } },
      React.createElement(
        "p",
        { style: { backgroundColor: "orange" } },
        "This is my First Paragraph"
      ),
      React.createElement(
        "p",
        { style: { backgroundColor: "blue" } },
        "This is my Second Paragrapg"
      )
    )
  );
};
