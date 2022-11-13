import { connect } from "react-redux";
import { Link } from "react-router-dom";

const PollCardResult = (props) => {
  const { users, question, authedUser } = props;

  return (
    <div className="content-wrapper">
      <h2>Poll Result:</h2>
      <div className="poll">
        <div className="poll-info">
          <p>The Internally Opinionated would currently rather</p>
          <h3>A: {question.optionOne.text}</h3>
          <p>vs.</p>
          <h3>B: {question.optionTwo.text}</h3>
          <hr></hr>
          <p>
            It looks like you're in the minority. Spark up a conversation with
            your colleagues to find out why!
          </p>
          <p>
            It looks like you're in the majority. Spark up a conversation with
            your colleagues to help them see why option B is leading!
          </p>
        </div>
      </div>
      <Link to="/">
        <button>Return to Home</button>
      </Link>
    </div>
  );
};

const mapStateToProps = ({ authedUser, questions, users }, { id }) => {
  const question = questions[id];

  return {
    authedUser,
    question,
    users,
  };
};

export default connect(mapStateToProps)(PollCardResult);
