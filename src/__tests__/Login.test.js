import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import LogIn from "../components/LogIn";

const mockStore = configureStore([]);

describe("LogIn", () => {
  let store, component;

  beforeEach(() => {
    store = mockStore({
      authedUser: null,
      users: {
        mtsamis: {
          id: "mtsamis",
          name: "Mike Tsamis",
        },
        sarahedo: {
          id: "sarahedo",
          name: "Sarah Edo",
        },
      },
    });
  });

  it("should show correct dropdown default text", () => {
    component = render(
      <Provider store={store}>
        <Router>
          <LogIn />
        </Router>
      </Provider>
    );
    expect(
      screen.getByRole("option", { name: "Select a User..." }).selected
    ).toBe(true);
  });

  it("should register a user selection", () => {
    component = render(
      <Provider store={store}>
        <Router>
          <LogIn />
        </Router>
      </Provider>
    );

    const combobox = screen.getByRole("combobox");
    const selectedUser = screen.getByRole("option", { name: "Sarah Edo" });
    fireEvent.change(combobox, {
      target: {
        value: selectedUser.value,
      },
    });

    expect(selectedUser.selected).toBe(true);
  });

  it("should match the snapshot", () => {
    component = render(
      <Provider store={store}>
        <Router>
          <LogIn />
        </Router>
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });
});
