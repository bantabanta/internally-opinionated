import { connect } from "react-redux";
import { handleAddAnswer } from "../actions/questions";
import { useNavigate, Link, route } from "react-router-dom";
import { useState, useEffect } from "react";

const PollCardQuestion = (props) => {
  const navigate = useNavigate();
  const { users, question, authedUser, dispatch } = props;

  useEffect(() => {
    if (question === undefined) {
      console.log("YEWWWW");
      navigate("/question/404");
    }
  }, [question]);

  const [selected, setSelected] = useState("");
  const disabled = selected === "";

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.group("Add Answer");
    // console.log(question.id);
    // console.log(authedUser);
    // console.log(selected);
    // console.groupEnd();

    dispatch(
      handleAddAnswer({
        qid: question.id,
        authedUser,
        answer: selected,
      })
    );
  };

  // PollPage will always pass anything after question/
  if (question === undefined) {
    console.log("YEWWWW");
    // navigate("/question/404");
  }

  const handleChange = (e) => {
    const text = e.target.value;
    setSelected(text);
  };

  return (
    <div className="content-wrapper">
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
