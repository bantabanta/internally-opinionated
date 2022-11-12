import { connect } from "react-redux";
import { useState } from "react";
import PollCardHome from "./PollCardHome";

const Dashboard = (props) => {
  // console.group("Dashboard Props");
  // console.log(props);
  // console.groupEnd();

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="content-wrapper">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Unanswered Polls
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Poll Results
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <p>Click a poll to vote</p>
          <ul className="poll-list">
            {props.unansweredQuestions.map((question) => (
              <li key={question.id}>{<PollCardHome id={question.id} />}</li>
            ))}
          </ul>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <p>Click a poll to see result</p>
          <ul className="poll-list">
            {props.answeredQuestions.map((question) => (
              <li key={question.id}>{<PollCardHome id={question.id} />}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ questions, authedUser, users }) => {
  const answeredIds = Object.keys(users[authedUser].answers);

  const answeredQuestions = Object.values(questions) // all question values
    .filter((question) => answeredIds.includes(question.id)) // filter where answeredIDs includes question ID
    .sort((a, b) => b.timestamp - a.timestamp); // then sort by time

  const unansweredQuestions = Object.values(questions)
    .filter((question) => !answeredIds.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);

  return {
    answeredQuestions,
    unansweredQuestions,
  };
};

export default connect(mapStateToProps)(Dashboard);
