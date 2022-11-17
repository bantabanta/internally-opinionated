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
          <div className="card-header">
            <img
              className="avatar"
              src={users[question.author].avatarURL}
              alt="user avatar"
            />
            <div className="content">
              <p>{`${users[question.author].name}`}</p>
              {users[question.author] === users[authedUser] ? (
                <span>{`You asked on`}</span>
              ) : (
                <span>Asked on</span>
              )}
              <span>{FormatDate(question.timestamp)}</span>
            </div>
          </div>
          <div className="card-content">
            <hr></hr>
            <h3>
              {answer === "optionOne" && (
                <span className="text-standout">You voted to </span>
              )}
              {question.optionOne.text}
            </h3>
            <p>
              {votes[0]} of {voteSum} votes
            </p>
            <div
              className="percent-bar"
              style={{
                "--width": `${((votes[0] / voteSum) * 100).toFixed(0)}%`,
              }}
              data-label={`${((votes[0] / voteSum) * 100).toFixed(0)}%`}
            ></div>

            {/* <br></br> */}
            <h3>
              {answer === "optionTwo" && (
                <span className="text-standout">You voted to </span>
              )}
              {question.optionTwo.text}
            </h3>
            <p>
              {votes[1]} of {voteSum} votes
            </p>
            <div
              className="percent-bar"
              style={{
                "--width": `${((votes[1] / voteSum) * 100).toFixed(0)}%`,
              }}
              data-label={`${((votes[1] / voteSum) * 100).toFixed(0)}%`}
            ></div>

            <br></br>
            <div className="card-btn">
              <Link to="/">
                <button>Back to Home</button>
              </Link>
            </div>
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
