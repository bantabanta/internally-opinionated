import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";

const Navbar = (props) => {
  const { authedUser } = props;

  const handleLogout = (e) => {
    e.preventDefault();
    props.dispatch(setAuthedUser(null));
  };

  return (
    <nav className="nav">
      <Link to="/" className="logo">
        <h1>I O</h1>
      </Link>
      {authedUser !== null && (
        <ul>
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
          <li className="logout">
            <button onClick={handleLogout}>Log Out</button>
          </li>
        </ul>
      )}
    </nav>
  );
};

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser,
  };
};

export default connect(mapStateToProps)(Navbar);
