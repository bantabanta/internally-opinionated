import { useState } from "react";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/questions";
import { useNavigate } from "react-router-dom";

const AddPoll = (props) => {
  const navigate = useNavigate();

  const [optionOneText, setOptionOneText] = useState("");
  const [optionTwoText, setOptionTwoText] = useState("");

  const { dispatch, authedUser, users } = props;

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
      <div className="header">
        <h1>Create A Poll</h1>
        <p>Whats on your mind today {users[authedUser].name.split(" ")[0]}?</p>
      </div>
      <div className="card">
        <div className="card-info">
          <h3>Would my colleagues rather:</h3>
          <br></br>
          <form className="new-poll" onSubmit={handleSubmit}>
            <input
              size="40"
              placeholder="Enter the first option.."
              value={optionOneText}
              onChange={handleOptionOneChange}
              className="input"
              maxLength={80}
            />
            <br></br>
            <br></br>
            <div className="text-standout">OR</div>
            <br></br>
            <input
              size="40"
              placeholder="Enter the second option.."
              value={optionTwoText}
              onChange={handleOptionTwoChange}
              className="input"
              maxLength={80}
            />
            <br></br>
            <br></br>
            {/* {tweetLeft <= 100 && <div className="tweet-length">{tweetLeft}</div>} */}
            <div className="card-btn">
              <button
                type="submit"
                disabled={optionOneText === "" || optionTwoText === ""}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users,
  };
}

export default connect(mapStateToProps)(AddPoll);
