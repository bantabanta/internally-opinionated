import { connect } from "react-redux";
import PollCard from "./PollCard";
import Login from "./Login";

const Dashboard = (props) => {
  // console.log(props.authedUser);
  return (
    <div>
      <h3>Questions</h3>
      <ul className="dashboard-list">
        {props.questionIds.map((id) => (
          <li key={id}>{<PollCard id={id} />}</li>
        ))}
      </ul>
    </div>
  );
};

// state needed: all the users, the authedUser, and the questions
const mapStateToProps = ({ questions, authedUser }) => {
  return {
    authedUser,
    questionIds: Object.keys(questions).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    ),
  };
};

export default connect(mapStateToProps)(Dashboard);
