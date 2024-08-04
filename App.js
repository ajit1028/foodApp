import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <h1 id="heading" className="ajit" tabIndex="1">
    Namste Raect using JSX 🚀
  </h1>
);

const data = 100;
const jsCode = <h1> i am on my way to become an awesome resct developer 🚀</h1>;

const HeadingComponent = () => (
  <div id="container">
    {data + 200}
    {jsCode}
    {Title()}
    <Title></Title>
    <Title />
    <h1>Namaste Raect using HeadingComponent 🚀</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
