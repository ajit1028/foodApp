import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

//React.Component === Component
class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Compenent Did Mount");
  }
  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About</h1>
        <h2>This is about us page</h2>
        <UserClass name={"FirstClass"} location={"Bangalore class"} />
        {/* <UserClass name={"SecondClass"} location={"Bangalore class"} /> */}
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is about us page</h2>
//       {/* <User name={"Ajit Singh (function)"} /> */}
//       <UserClass name={"Ajit Singh (class)"} location={"Bangalore class"} />
//     </div>
//   );
// };
export default About;
