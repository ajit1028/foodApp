import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  [
    React.createElement("h1", { id: "child" }, "This is Namaste Raect"),
    (React.createElement("h1", { id: "child" }, "i am h1 tag"),
    React.createElement("h2", { id: "child" }, "i am h2 tag")),
  ],
  [
    React.createElement("h1", { id: "child" }, "i am h1 Hello"),
    (React.createElement("h1", { id: "child" }, "i am h1 tag"),
    React.createElement("h2", { id: "child" }, "i am h2 Hello")),
  ],
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
