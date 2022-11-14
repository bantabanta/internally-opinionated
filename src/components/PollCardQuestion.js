import { connect } from "react-redux";
// import { handleAddQuestionAnswer } from "../actions/questions";
import { useState } from "react";

const PollCardQuestion = (props) => {
  const { users, question, authedUser, dispatch } = props;
  const [selected, setSelected] = useState("optionOne");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(selected);

    // dispatch(handleAddQuestionAnswer(question.id, value, authedUser));
  };

  const handleChange = (e) => {
    const text = e.target.value;
    setSelected(text);
  };

  return (
    <div className="content-wrapper">
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
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
    // <div className="content-wrapper">
    //   <div className="poll">
    //     <div className="poll-info">
    //       <p>{`In your internally opinionated opinion, would you rather:`}</p>
    //       <h3>A: {question.optionOne.text}</h3>
    //       <p>or..</p>
    //       <h3>B: {question.optionTwo.text}</h3>
    //       <button onClick={handleSubmit}>Submit</button>
    //     </div>
    //   </div>
    // </div>
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
