import { connect } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

const PollCardResult = (props) => {
  const { question, user } = props;

  const answer = user.answers[question.id];

  const votes = [
    question.optionOne.votes.length,
    question.optionTwo.votes.length,
  ];

  const voteSum =
    question.optionOne.votes.length + question.optionTwo.votes.length;

  return (
    <div className="content-wrapper">
      <div className="welcome">
        <h2>Poll Result</h2>
        <p>The internally opinionated have spoken!</p>
      </div>
      <div className="poll poll-info">
        <div>
          <h3>
            {answer === "optionOne" && <span>Your Vote: </span>}
            {question.optionOne.text}
          </h3>
          <div>
            <p>{((votes[0] / voteSum) * 100).toFixed(0)}%</p>
            <span>
              <p>
                {votes[0]} out of {voteSum} votes
              </p>
            </span>
          </div>
        </div>
        <div>
          <h3>
            {answer === "optionTwo" && <span>Your vote: </span>}
            {question.optionTwo.text}
          </h3>
          <div>
            <p>{((votes[1] / voteSum) * 100).toFixed(0)}%</p>
            <span>
              <p>
                {votes[1]} out of {voteSum} votes
              </p>
            </span>
          </div>
          <Link to="/">
            <button>Back to Home</button>
          </Link>
          <br></br>
          <br></br>
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
