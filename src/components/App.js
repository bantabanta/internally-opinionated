import { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";

function App(props) {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);
  return <div>Hello World</div>;
}

export default connect()(App);
