import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Navbar from "../components/Navbar";

const mockStore = configureStore([]);

describe("Navbar", () => {
  let store, component;

  it("should match snapshot with authed User", () => {
    store = mockStore({
      authedUser: "sarahedo",
    });
    component = render(
      <Provider store={store}>
        <Router>
          <Navbar />
        </Router>
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });
});
