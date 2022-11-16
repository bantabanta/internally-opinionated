import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { FormatDate } from "../utils/helpers";

const PollCardResult = (props) => {
  const { question, user, users, authedUser } = props;

  const answer = user.answers[question.id];

  const votes = [
    question.optionOne.votes.length,
    question.optionTwo.votes.length,
  ];

  const voteSum =
    question.optionOne.votes.length + question.optionTwo.votes.length;

  return (
    <div className="content-wrapper">
      <div className="header">
        <h1>Poll Result</h1>
        <p>The internally opinionated have spoken!</p>
      </div>
      <div className="card">
        <div className="card-info">
          <div className="card-top">
            <img
              className="avatar"
              src={users[question.author].avatarURL}
              alt="user avatar"
            />
            <div className="content">
              {users[question.author] === users[authedUser] ? (
                <p>{`You`}</p>
              ) : (
                <p>{`${users[question.author].name}`}</p>
              )}
              <span>Asked on</span>
              <span>{FormatDate(question.timestamp)}</span>
            </div>
          </div>
          <hr></hr>
          <h3>
            {answer === "optionOne" && (
              <span className="text-standout">Your Vote - </span>
            )}
            {question.optionOne.text}
          </h3>
          <p>
            {((votes[0] / voteSum) * 100).toFixed(0)}% : {votes[0]} out of{" "}
            {voteSum} votes
          </p>
          <h3>
            {answer === "optionTwo" && (
              <span className="text-standout">Your vote: </span>
            )}
            {question.optionTwo.text}
          </h3>
          <p>
            {((votes[1] / voteSum) * 100).toFixed(0)}% : {votes[1]} out of{" "}
            {voteSum} votes
          </p>
          <div className="card-btn">
            <Link to="/">
              <button>Back to Home</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser, questions, users }, { id }) => {
  const question = questions[id];
  const user = users[authedUser];

  return {
    authedUser,
    question,
    users,
    user,
  };
};

export default connect(mapStateToProps)(PollCardResult);
