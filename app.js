import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement(
  "h1",
  {
    id: "title",
    key: "h1",
  },
  "Namaste React"
);

const heading2 = React.createElement(
  "h2",
  {
    id: "title",
    key: "h2",
  },
  "Heading 2"
);

const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [
    React.createElement(
      "h1",
      {
        id: "title",
        key: "h1",
      },
      "Namaste React"
    ),
    React.createElement("ul", {}, [
      React.createElement("li", {}, "About US"),
      React.createElement("li", {}, "Support"),
      React.createElement("li", {}, "Home"),
    ]),
  ]
);

// JSX | ReactElement
const heading3 = (
  <h1 id="title" key="h3">
    React
  </h1>
);

// Component


const Heading4 = ()=>(
  <h1 id="title" key="h3">
    React
  </h1>
);

// Functional/React Component

const HeaderComponent = ()=>{
  return (
    <div>
    <Heading4 />
      <h1>Namaste</h1>
      <h2>React</h2>
    </div>
  );
};



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);
