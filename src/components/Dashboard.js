import { connect } from "react-redux";
import { useState } from "react";
import PollCardHome from "./PollCardHome";

const Dashboard = (props) => {
  // console.group("Dashboard Props");
  // console.log(props);
  // console.groupEnd();

  const [activeTab, setActiveTab] = useState(1);

  const { answeredQuestions, unansweredQuestions, users, authedUser } = props;

  const toggleTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="content-wrapper">
      <div className="header">
        <h1>Oh hey, {users[authedUser].name}!</h1>
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
        <div className={activeTab === 1 ? "content active-content" : "content"}>
          <ul>
            {unansweredQuestions.map((question) => (
              <li key={question.id}>{<PollCardHome id={question.id} />}</li>
            ))}
          </ul>
        </div>

        <div
          className={activeTab === 2 ? "content  active-content" : "content"}
        >
          <ul>
            {answeredQuestions.map((question) => (
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
