import PollCardQuestion from "./PollCardQuestion";
import PollCardResult from "./PollCardResult";
import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  };

  return ComponentWithRouterProp;
};

const PollPage = (props) => {
  const { questionAnswered, id } = props;

  return (
    <div>
      {questionAnswered ? (
        <PollCardResult id={id} />
      ) : (
        <PollCardQuestion id={id} />
      )}
    </div>
  );
};

const mapStateToProps = ({ authedUser, users }, props) => {
  const { id } = props.router.params;
  const questionAnswered = Object.keys(users[authedUser].answers).includes(id);

  return {
    id,
    questionAnswered,
  };
};

export default withRouter(connect(mapStateToProps)(PollPage));
