import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { FormatDate } from "../utils/helpers";

const Leaderboard = (props) => {
  console.group("Leaderboard Props");
  console.log(props);
  console.groupEnd();

  const { sortedUsers } = props;

  return (
    <div className="content-wrapper">
      <div className="header">
        <h1>Leaderboard</h1>
        <p>See where you stack up against the opinionated.</p>
      </div>
      <ul>
        {sortedUsers.map((user) => (
          <li key={user.id} className="card">
            <div className="card-info leaderboard">
              <div className="leaderboard-sidebar">
                <img
                  className="leaderboard-avatar"
                  src={user.avatarURL}
                  alt="user avatar"
                />
                <div className="">
                  <h4>{`${user.name}`}</h4>
                </div>
              </div>
              <div className="leaderboard-content">
                <p>
                  <span className="text-standout">{user.numAnswers} </span>
                  Answered Polls{" "}
                </p>
                <hr></hr>
                <p>
                  <span className="text-standout">{user.numQuestions} </span>
                  Created Polls{" "}
                </p>
              </div>
              <div className="leaderboard-score">
                <div id="score-bubble">
                  <h1>
                    <span className="text-standout">
                      0{user.numAnswers + user.numQuestions}
                    </span>
                  </h1>
                </div>
                <h4>Points</h4>
              </div>
            </div>
          </li>
        ))}
        <div className="card-btn">
          <Link to="/">
            <button>Back to Home</button>
          </Link>
        </div>
      </ul>
    </div>
  );
};

const mapStateToProps = ({ users }) => {
  const sortedUsers = Object.values(users)
    .map((user) => ({
      id: user.id,
      name: user.name,
      avatarURL: user.avatarURL,
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
