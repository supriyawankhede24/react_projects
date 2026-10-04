import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  const data = {
    name: "Supriya",
    role: "Developer",
  };
  return (
    <div>
      <h1>This is About page</h1>
      <User userData={data} />
      <UserClass userData={data} />
    </div>
  );
};

export default About;
