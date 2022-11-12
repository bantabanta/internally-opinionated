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
      <h1 className="logo">IO</h1>
      <ul>
        <li>
          <Link to="/">
            <span className="num">01.</span> Home
          </Link>
        </li>
        <li>
          <Link to="/add">
            <span className="num">02.</span> New Poll
          </Link>
        </li>
        <li>
          <Link to="/leaderboard">
            <span className="num">03.</span> Leaderboard
          </Link>
        </li>
        <li>
          <Link to="/404">
            <span className="num">| 404 |</span>
          </Link>
        </li>
        {/* <li className="user">{users[authedUser].name}</li> */}
      </ul>
      {props.authedUser !== null && (
        <div className="user">
          {users[authedUser].name}
          <button onClick={handleLogout}>Log Out</button>
        </div>
      )}
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
