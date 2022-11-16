import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { FormatDate } from "../utils/helpers";

const PollCardHome = (props) => {
  const { users, question, authedUser } = props;

  return (
    <Link to={`/question/${question.id}`} id={question.id}>
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
            <span className="text-standout">Would you rather</span>
            <span> {question.optionOne.text}</span>
            <span className="text-standout"> or</span>
            <span> {question.optionTwo.text}?</span>
          </h3>
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

export default connect(mapStateToProps)(PollCardHome);
