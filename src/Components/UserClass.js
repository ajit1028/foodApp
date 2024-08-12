import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);

    this.state = {
      //   count: 0,
      //   count2: 1,
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url: "https://dummy-photo",
      },
    };
    console.log(this.props.name + " Child Constructor");
  }

  // async is there  for understanding the api call
  async componentDidMount() {
    console.log(this.props.name + " Child Compenent Did Mount");
    const data = await fetch("https://api.github.com/users/ajit1028");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  componentDidUpdate() {
    console.log("Component Did Update is called");
  }

  componentWillUnmount() {
    console.log("Component Will Unmount is called");
  }

  render() {
    // console.log(this.props.name + " Child Render");
    // const { name, location } = this.props;
    // const { count, count2 } = this.state;
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>{name}</h2>
        <h3>{location}</h3>
        <h4>Github : https://github.com/ajit1028</h4>

        {/* <h1>Count:{count}</h1> 
         <h1>Count2:{count2}</h1> 
         <button
          onClick={() => {
            //NEVER UPDATE STATE VARIABLES DIRECTLY
            this.setState({
              count: this.state.count + 1,
              //   count2: this.state.count2 - 1, //decrease the count
            });
          }}
        >
          Count Increase
        </button>  

        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>Github: https://github.com/ajit1028</h3>
        */}
      </div>
    );
  }
}

export default UserClass;

/*
 Parent Constructor
 Parent Render
 FirstClass Child Constructor
 FirstClass Child Render
 SecondClass Child Constructor
 SecondClass Child Render
 FirstClass Child Compenent Did Mount
 SecondClass Child Compenent Did Mount
 Parent Compenent Did Mount
 */
