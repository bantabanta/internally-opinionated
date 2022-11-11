import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";

const Navbar = (props) => {
  const { users, authedUser } = props;

  // console.group("Navbar Props");
  // console.log(props);
  // console.groupEnd();

  const handleLogout = (e) => {
    e.preventDefault();
    props.dispatch(setAuthedUser(null));
  };

  return (
    // props.authedUser !== null && (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/add">New Poll</Link>
        </li>
        <li>
          <Link to="/leaderboard">Leaderboard</Link>
        </li>
        <li>
          <Link to="/404">404 Page</Link>
        </li>
        {/* <li className="user">{users[authedUser].name}</li> */}
        {props.authedUser !== null && (
          <li className="user">
            {users[authedUser].name}
            <button onClick={handleLogout}>Log Out</button>
          </li>
        )}
      </ul>
    </nav>
  );
  // );
};

const mapStateToProps = ({ authedUser, users }) => {
  return {
    authedUser,
    users,
  };
};

export default connect(mapStateToProps)(Navbar);
