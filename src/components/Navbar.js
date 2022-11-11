import { Link } from "react-router-dom";

const Navbar = (props) => {
  console.log(props);
  // TODO: Add AuthedUser display
  return (
    props.authedUser !== null && (
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add">Create a Question</Link>
          </li>
          <li>
            <Link to="/leaderboard">Leaderboard</Link>
          </li>
          <li>
            <Link to="/404">404 Page</Link>
          </li>
          <li className="user">Username</li>
        </ul>
      </nav>
    )
  );
};

export default Navbar;
