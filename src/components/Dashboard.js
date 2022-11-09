import { connect } from "react-redux";

const Dashboard = (props) => {
  console.log(props);
  return (
    <div>
      <h3>Questions answered</h3>
      <ul className="dashboard-list">
        {props.questionIds.map((id) => (
          // <li key={id}>{/* <Tweet id={id} /> */}</li>
          <li key={id}>{`Question ID: ${id}`}</li>
        ))}
      </ul>
      <h3>Questions unanswered</h3>
      <ul className="dashboard-list">
        {props.questionIds.map((id) => (
          // <li key={id}>{/* <Tweet id={id} /> */}</li>
          <li key={id}>{`Question ID: ${id}`}</li>
        ))}
      </ul>
    </div>
  );
};

// state needed: all the users, the authedUser, and the questions
const mapStateToProps = ({ questions }) => ({
  questionIds: Object.keys(questions).sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp
  ),
});

export default connect(mapStateToProps)(Dashboard);
