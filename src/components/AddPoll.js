import { useState } from "react";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/questions";
import { useNavigate } from "react-router-dom";

const AddPoll = ({ dispatch }) => {
  const navigate = useNavigate();
  const [optionOneText, setOptionOneText] = useState("");
  const [optionTwoText, setOptionTwoText] = useState("");

  // console.group("Add Poll Props");
  // console.log("opt 1");
  // console.log(optionOneText);
  // console.log("opt 2");
  // console.log(optionTwoText);
  // console.groupEnd();

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
    dispatch(handleAddQuestion(optionOneText, optionTwoText));

    setOptionOneText("");
    setOptionTwoText("");
    navigate("/");
  };

  return (
    <div className="content-wrapper">
      <h3 className="center">Create A Poll</h3>
      <div>Would you rather:</div>
      <br></br>
      <form className="new-poll" onSubmit={handleSubmit}>
        <textarea
          placeholder="Do Stuff"
          value={optionOneText}
          onChange={handleOptionOneChange}
          className="textarea"
          maxLength={80}
        />
        <br></br>
        <br></br>
        <div>OR</div>
        <br></br>
        <br></br>
        <textarea
          placeholder="Do Things"
          value={optionTwoText}
          onChange={handleOptionTwoChange}
          className="textarea"
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
  );
};

export default connect()(AddPoll);