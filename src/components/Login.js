import { connect } from "react-redux";
import { useState } from "react";
import { setAuthedUser } from "../actions/authedUser";
import LoadingBar from "react-redux-loading-bar";

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
    <div className="content-wrapper poll">
      {authedUser === null ? (
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
      ) : null}
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
