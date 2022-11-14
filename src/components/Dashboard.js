import { connect } from "react-redux";
import { useState } from "react";
import PollCardHome from "./PollCardHome";

const Dashboard = (props) => {
  // console.group("Dashboard Props");
  // console.log(props);
  // console.groupEnd();

  const [activeTab, setActiveTab] = useState(1);

  const toggleTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="content-wrapper">
      <div className="welcome">
        <h2>Hey there {props.users[props.authedUser].name}!</h2>
        <p>Vote on a poll or check out results from a previous vote</p>
      </div>
      <div className="tabs-wrapper">
        <button
          className={activeTab === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Cast a Vote
        </button>
        <button
          className={activeTab === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          See Results
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={activeTab === 1 ? "content  active-content" : "content"}
        >
          <ul className="poll-list">
            {props.unansweredQuestions.map((question) => (
              <li key={question.id}>{<PollCardHome id={question.id} />}</li>
            ))}
          </ul>
        </div>

        <div
          className={activeTab === 2 ? "content  active-content" : "content"}
        >
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
  const answerIds = Object.keys(users[authedUser].answers);

  const answeredQuestions = Object.values(questions)
    .filter((question) => answerIds.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);

  const unansweredQuestions = Object.values(questions)
    .filter((question) => !answerIds.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);

  return {
    answeredQuestions,
    unansweredQuestions,
    users,
    authedUser,
  };
};

export default connect(mapStateToProps)(Dashboard);
