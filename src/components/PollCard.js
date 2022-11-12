import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Question = (props) => {
  const { users, question, authedUser } = props;
  console.log(users[authedUser].name);

  return (
    <Link to={`/question/${question.id}`}>
      <div className="poll">
        <div className="poll-info">
          {users[question.author] === users[authedUser] ? (
            <p>{`You asked your colleagues if they would rather:`}</p>
          ) : (
            <p>{`${
              users[question.author].name
            } would like to know if you would rather:`}</p>
          )}
          <h3>A: {question.optionOne.text}</h3>
          <p>or..</p>
          <h3>B: {question.optionTwo.text}</h3>
        </div>
      </div>
    </Link>
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

export default connect(mapStateToProps)(Question);
