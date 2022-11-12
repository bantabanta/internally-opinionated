import { connect } from "react-redux";
import PollCard from "./PollCard";

const Dashboard = (props) => {
  console.group("Dashboard Props");
  console.log(props);
  console.groupEnd();

  return (
    <div>
      <h3>Answered Questions</h3>
      <ul className="dashboard-list">
        {props.answeredQuestions.map((question) => (
          <li key={question.id}>{<PollCard id={question.id} />}</li>
        ))}
      </ul>
      <h3>Unanswered Questions</h3>
      <ul className="dashboard-list">
        {props.unansweredQuestions.map((question) => (
          <li key={question.id}>{<PollCard id={question.id} />}</li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = ({ questions, authedUser, users }) => {
  const answeredIds = Object.keys(users[authedUser].answers);

  // const questionIds = Object.keys(questions).sort(
  //   (a, b) => questions[b].timestamp - questions[a].timestamp
  // );

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
