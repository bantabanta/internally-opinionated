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
    <nav className="nav">
      <Link to="/" className="logo">
        <h1>I O</h1>
      </Link>
      {props.authedUser !== null && (
        <ul>
          {/* <li>
            <Link to="/">
              <span className="num">01.</span> Home
            </Link>
          </li> */}
          <li>
            <Link to="/add">
              <span className="num">01.</span> New Poll
            </Link>
          </li>
          <li>
            <Link to="/leaderboard">
              <span className="num">02.</span> Leaders
            </Link>
          </li>
          {/* {props.authedUser !== null && ( */}
          <li className="logout">
            <button onClick={handleLogout}>Log Out</button>
          </li>
        </ul>
      )}
    </nav>
  );
};

const mapStateToProps = ({ authedUser, users }) => {
  return {
    authedUser,
    users,
  };
};

export default connect(mapStateToProps)(Navbar);
