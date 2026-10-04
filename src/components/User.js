import { useState, useEffect } from "react";

const User = (props) => {
const {userData} = props
const [count, setCount] = useState(0)

  return (
    <div className="userClass">
      <button type="" onClick={()=>{setCount(count+1)}} >Increment</button>
      <h2>Count: {count}</h2>
      <h1>Name from function: {userData.name}</h1>
      <h3>{userData.role}</h3>
    </div>
  );
};

export default User;