import { setAuthedUser, SET_AUTHED_USER } from "./authedUser";

describe("set Authed user correctly", () => {
  it("will create a SET_AUTHED_USER action type", () => {
    const id = "test id";
    const expectation = {
      type: SET_AUTHED_USER,
      id,
    };

    expect(setAuthedUser(id)).toEqual(expectation);
  });
});
