import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("frm class");

    this.state = {
      count: 1,
    };
  }
  render() {
    const { name, role } = this.props.userData;
    return (
      <div className="userClass">
        <div>
          loggedInUser:
          <UserContext.Consumer>
            {({data}) => console.log('classData: ',data)}
          </UserContext.Consumer>
        </div>
        <button
          className="border-b-2 bg-slate-500"
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          {" "}
          IncClass
        </button>
        <h2>Count: {this.state.count}</h2>
        <h1>ClassName: {name}</h1>
        <h3>{role}</h3>
      </div>
    );
  }
}

export default UserClass;
