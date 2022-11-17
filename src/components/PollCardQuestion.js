import { connect } from "react-redux";
import { handleAddAnswer } from "../actions/questions";
import { useState } from "react";
import Error404 from "./Error404";
import { FormatDate } from "../utils/helpers";

const PollCardQuestion = (props) => {
  const [selected, setSelected] = useState("");
  const { users, question, authedUser, dispatch } = props;

  console.group("QuestionPage Props");
  console.log(props);
  console.groupEnd();

  const disabled = selected === "";

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      handleAddAnswer({
        qid: question.id,
        authedUser,
        answer: selected,
      })
    );
  };

  const handleChange = (e) => {
    const text = e.target.value;
    setSelected(text);
  };

  return (
    <div className="content-wrapper">
      {question === undefined ? (
        <Error404 />
      ) : (
        <div>
          <div className="header">
            <h1>Cast Your Vote</h1>
            <p>The results of this poll will appear after you vote</p>
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
              <hr></hr>
              <h3 className="text-standout">Would you rather</h3>
              <br></br>
              <form onSubmit={handleSubmit}>
                <div className="radio">
                  <label>
                    <input
                      type="radio"
                      value="optionOne"
                      checked={selected === "optionOne"}
                      onChange={handleChange}
                    />
                    {question.optionOne.text}
                  </label>
                </div>
                <br></br>
                {/* <h3>OR..</h3> */}
                <div className="radio">
                  <label>
                    <input
                      type="radio"
                      value="optionTwo"
                      checked={selected === "optionTwo"}
                      onChange={handleChange}
                    />
                    {question.optionTwo.text}
                  </label>
                </div>
                <br></br>
                <div className="card-btn">
                  <button type="submit" disabled={disabled}>
                    Submit Vote
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
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
