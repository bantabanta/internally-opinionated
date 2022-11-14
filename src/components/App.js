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
import { Routes, Route, Router } from "react-router-dom";

function App(props) {
  console.log(props);
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  return (
    <Fragment>
      <Navbar />
      <div className="container">
        {props.authedUser === null ? (
          <Login />
        ) : (
          <Routes>
            <Route path="/" exact element={<Dashboard />} />
            <Route path="/add" exact element={<AddPoll />} />
            <Route path="/question/:id" exact element={<PollPage />} />
<<<<<<< HEAD
=======
            <Route path="/404" exact element={<Error404 />} />
            <Route element={<Error404 />} />
>>>>>>> 6ccfe03a4541c6b90826bad453e63a14d9d1b4c2
            <Route path="/leaderboard" exact element={<Leaderboard />} />
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
