import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Leaderboard = (props) => {
  console.group("Leaderboard Props");
  console.log(props);
  console.groupEnd();

  const { sortedUsers } = props;

  return (
    <div className="content-wrapper">
      <div className="welcome">
        <h2>Leaderboard</h2>
        <p>See where you stack up against the opinionated</p>
      </div>
      <ul>
        {sortedUsers.map((user) => (
          <li key={user.id} className="poll poll-info">
            <div className="poll-info">
              <p>{user.name}</p>
              <p>Answered Polls: {user.numAnswers}</p>
              <p>Polls Created: {user.numQuestions}</p>
              <p>Total: {user.numAnswers + user.numQuestions}</p>
            </div>
          </li>
        ))}
      </ul>
      <Link to="/" className="logo">
        <button>Back to Home</button>
      </Link>
    </div>
  );
};

const mapStateToProps = ({ users }) => {
  const sortedUsers = Object.values(users)
    .map((user) => ({
      id: user.id,
      name: user.name,
      numAnswers: Object.values(user.answers).length,
      numQuestions: Object.values(user.questions).length,
      total:
        Object.values(user.questions).length +
        Object.values(user.answers).length,
    }))
    .sort((a, b) => b.total - a.total);

  return {
    sortedUsers,
  };
};

export default connect(mapStateToProps)(Leaderboard);
