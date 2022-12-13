import { render } from "@testing-library/react";
import * as React from "react";
import Error404 from "../components/Error404";
import { BrowserRouter as Router } from "react-router-dom";

describe("Dashboard", () => {
  it("will match snapshot", () => {
    const view = render(
      <Router>
        <Error404 />
      </Router>
    );
    expect(view).toMatchSnapshot();
  });
});
