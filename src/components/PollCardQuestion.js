import { connect } from "react-redux";

const PollCardQuestion = (props) => {
  const { users, question, authedUser } = props;
  return (
    <div className="content-wrapper">
      <h2>Poll Question:</h2>
      <div className="poll">
        <div className="poll-info">
          <p>{`In your internally opinionanted opinion, would you rather:`}</p>
          <h3>A: {question.optionOne.text}</h3>
          <p>or..</p>
          <h3>B: {question.optionTwo.text}</h3>
        </div>
      </div>
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

export default connect(mapStateToProps)(PollCardQuestion);
