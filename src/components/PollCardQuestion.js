import { connect } from "react-redux";
import { handleAddAnswer } from "../actions/questions";
import { useState } from "react";
import Error404 from "./Error404";

const PollCardQuestion = (props) => {
  const [selected, setSelected] = useState("");
  const { question, authedUser, dispatch } = props;

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
          <div className="welcome">
            <h2>Cast Your Vote</h2>
            <p>The results will appear after submission</p>
          </div>
          <div className="poll">
            <div className="poll-info">
              <h3>In your internally opinionated opinion, would you rather:</h3>
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
                <span>OR..</span>
                <br></br>
                <br></br>
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
                <button type="submit" disabled={disabled}>
                  Submit Vote
                </button>
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
