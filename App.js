/*
 * <div id ="parent">
           <div id="child">
             <h1> i am  h1 tag  <h1>
            <h1> i am  h1 tag  <h1>

           </div>

             <div id="child">
             <h1> i am  h1 tag  <h1>
            <h1> i am  h1 tag  <h1>

           </div>
 * </div> 
 * 
 */
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("h1", { id: "child" }, "i am h1 tag")[
    (React.createElement("h1", { id: "child" }, "i am h1 tag"),
    React.createElement("h2", { id: "child" }, "i am h2 tag"))
  ],
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
