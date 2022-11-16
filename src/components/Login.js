import { connect } from "react-redux";
import { useState } from "react";
import { setAuthedUser } from "../actions/authedUser";

const Login = (props) => {
  const [value, setValue] = useState("Select a User...");
  const disabled = value === "Select a User..." ? true : false;

  const { userIds, users, authedUser } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    props.dispatch(setAuthedUser(value));
  };

  const handleChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const userDropdown = userIds.map((userId) => {
    return (
      <option key={userId} value={userId}>
        {users[userId].name}
      </option>
    );
  });

  return (
    <div className="content-wrapper center">
      <div className="header">
        <h1 className="text-standout">Internally Opinionated</h1>
        <p>Ask colleagues questions and vote on popular polls.</p>
      </div>
      <div className="card log-in">
        <form className="" onSubmit={handleSubmit}>
          <h3>Sign In to your account</h3>
          <select
            style={{ width: "200px" }}
            value={value}
            onChange={handleChange}
          >
            <option>Select a User...</option>
            {userDropdown}
          </select>
          {/* <br></br> */}
          <br></br>
          <button disabled={disabled} type="submit">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

function mapStateToProps({ users, authedUser }) {
  return {
    userIds: Object.keys(users),
    authedUser,
    users,
  };
}

export default connect(mapStateToProps)(Login);
