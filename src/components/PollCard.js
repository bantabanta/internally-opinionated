import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Question = (props) => {
  // console.log(props);

  const { author, id, optionOne, optionTwo } = props.question;

  return (
    <Link to={`/question/${id}`} className="poll">
      <div className="poll">
        <div className="poll-info">
          <p>{`${author} would like to know if you would rather:`}</p>
          <h3>{optionOne.text}</h3>
          <p>or..</p>
          <h3>{optionTwo.text}</h3>
        </div>
      </div>
    </Link>
  );
};

const mapStateToProps = (
  { authedUser, users, questions },
  { id }
) => {
  const question = questions[id];

  return {
    authedUser,
    question,
  };
};

export default connect(mapStateToProps)(Question);
