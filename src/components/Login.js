import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";

const Login = (props) => {
  console.log(props);

  const handleAuthedUser = (id) => {
    props.dispatch(setAuthedUser(id));
  };

  const { userIds, users } = props;
  return (
    <div>
      <h2>Welcome to Internally Opinionated!</h2>
      <h4>Click on a user to sign in as them and continue..</h4>
      {userIds.map((user) => (
        <button key={user} onClick={() => handleAuthedUser(user)}>
          {users[user].name}
        </button>
      ))}
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
