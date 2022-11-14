import { connect } from "react-redux";
import { useState } from "react";
import { setAuthedUser } from "../actions/authedUser";

const Login = (props) => {
  const [value, setValue] = useState("Select a User...");
  const disabled = value === "Select a User..." ? true : false;

  // console.group("Login Props");
  // console.log(props);
  // console.log("value");
  // console.log(value);
  // console.groupEnd();

  //TODO: styling

  const handleSubmit = (e) => {
    e.preventDefault();
    props.dispatch(setAuthedUser(value));
  };

  const handleChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const { userIds, users } = props;

  const userDropdown = userIds.map((userId) => {
    return (
      <option key={userId} value={userId}>
        {users[userId].name}
      </option>
    );
  });

  return (
    <div className="content-wrapper poll">
      <form onSubmit={handleSubmit}>
        <h1>Welcome to Internally Opinionated!</h1>
        <h3>Sign In</h3>
        <select value={value} onChange={handleChange}>
          <option>Select a User...</option>
          {userDropdown}
        </select>
        <br></br>
        <br></br>
        <button disabled={disabled} type="submit">
          Log In
        </button>
      </form>
    </div>
  );
};

function mapStateToProps({ users }) {
  return {
    userIds: Object.keys(users),
    users,
  };
}

export default connect(mapStateToProps)(Login);
