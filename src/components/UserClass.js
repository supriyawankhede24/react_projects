import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("frm class", props);

    this.state = {
      count: 1,
    };
  }
  render() {
    const { name, role } = this.props.userData;
    return (
      <div className="userClass">
        <button
          type=""
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
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
