import { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import PollPage from "./PollPage";
import Error404 from "./Error404";
import Login from "./Login";
import AddPoll from "./AddPoll";
import Leaderboard from "./Leaderboard";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";

function App(props) {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  return (
    <Fragment>
      <div className="container">
        <Navbar />
        {props.authedUser === null ? (
          <div>
            <Login />
          </div>
        ) : (
          <Routes>
            <Route path="/" exact element={<Dashboard />} />
            <Route path="/add" exact element={<AddPoll />} />
            <Route path="/questions/:id" exact element={<PollPage />} />
            <Route path="/leaderboard" exact element={<Leaderboard />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        )}
      </div>
    </Fragment>
  );
}

const mapStateToProps = ({ authedUser }) => ({
  authedUser,
});

export default connect(mapStateToProps)(App);
