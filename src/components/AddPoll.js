import { useState } from "react";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/questions";
import { useNavigate } from "react-router-dom";

const AddPoll = (props) => {
  const navigate = useNavigate();

  const [optionOneText, setOptionOneText] = useState("");
  const [optionTwoText, setOptionTwoText] = useState("");

  const { dispatch, authedUser } = props;

  const handleOptionOneChange = (e) => {
    const text = e.target.value;
    setOptionOneText(text);
  };

  const handleOptionTwoChange = (e) => {
    const text = e.target.value;
    setOptionTwoText(text);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleAddQuestion(optionOneText, optionTwoText, authedUser));
    setOptionOneText("");
    setOptionTwoText("");
    navigate("/");
  };

  return (
    <div className="content-wrapper">
      <div className="welcome">
        <h2>Create A Poll</h2>
        <p>Whats been keeping you up at night?</p>
      </div>
      <div className="poll poll-info">
        <br></br>
        <div>Would my colleagues rather:</div>
        <br></br>
        <form className="new-poll" onSubmit={handleSubmit}>
          <input
            placeholder="Enter option one.."
            value={optionOneText}
            onChange={handleOptionOneChange}
            className="input"
            maxLength={80}
          />
          <br></br>
          <br></br>
          <div>OR</div>
          <br></br>
          <input
            placeholder="Enter option two.."
            value={optionTwoText}
            onChange={handleOptionTwoChange}
            className="input"
            maxLength={80}
          />
          <br></br>
          <br></br>
          {/* {tweetLeft <= 100 && <div className="tweet-length">{tweetLeft}</div>} */}
          <button
            className="btn"
            type="submit"
            disabled={optionOneText === "" || optionTwoText === ""}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(AddPoll);
