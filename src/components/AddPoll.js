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
    dispatch(
      handleAddQuestion(
        optionOneText.toLowerCase(),
        optionTwoText.toLowerCase(),
        authedUser
      )
    );
    setOptionOneText("");
    setOptionTwoText("");
    navigate("/");
  };

  const pollLeft1 = 80 - optionOneText.length;
  const pollLeft2 = 80 - optionTwoText.length;

  return (
    <div className="content-wrapper">
      <div className="header">
        <h1>Create A Poll</h1>
        <p>Whats on your mind today {users[authedUser].name.split(" ")[0]}?</p>
      </div>
      <div className="card">
        <div className="card-info">
          <h3 className="center text-standout">Would you rather</h3>
          <br></br>
          <form className="new-poll" onSubmit={handleSubmit}>
            {pollLeft1 <= 40 && <div className="poll-length">{pollLeft1}</div>}
            <textarea
              style={{ width: "80%", height: "3rem" }}
              size="40"
              placeholder="Enter the first option..."
              value={optionOneText}
              onChange={handleOptionOneChange}
              className="input"
              maxLength={80}
            />
            <br></br>
            <div className="divider">
              <div className="divide-line">
                <hr></hr>
              </div>
              <div>OR</div>
              <div className="divide-line">
                <hr></hr>
              </div>
            </div>
            <br></br>
            {pollLeft2 <= 40 && <div className="poll-length">{pollLeft2}</div>}
            <textarea
              style={{ width: "80%", height: "3rem" }}
              placeholder="Enter the second option..."
              value={optionTwoText}
              onChange={handleOptionTwoChange}
              className="input"
              maxLength={80}
            />
            <br></br>
            <div className="card-btn">
              <button
                type="submit"
                disabled={optionOneText === "" || optionTwoText === ""}
              >
                Add Poll
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
