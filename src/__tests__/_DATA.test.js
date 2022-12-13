import { _saveQuestion, _saveQuestionAnswer } from "../utils/_DATA";

describe("_saveQuestion", () => {
  it("will succeed with correct input data", async () => {
    // this one works!
    const validQuestion = {
      optionOneText: "do this thing",
      optionTwoText: "do that thing",
      author: "sarahedo",
    };
    const result = await _saveQuestion(validQuestion);
    expect(result).toHaveProperty("id");
    expect(result).toHaveProperty("timestamp");
    expect(result.author).toEqual("sarahedo");
    expect(result.optionOne.votes).toEqual([]);
    expect(result.optionOne.text).toEqual("do this thing");
    expect(result.optionTwo.votes).toEqual([]);
    expect(result.optionTwo.text).toEqual("do that thing");
  });

  it("will throw a rejection error with incorrect input data", async () => {
    const invalidQuestion = {
      optionOneText: "",
      optionTwoText: "do that thing",
      author: "sarahedo",
    };
    await expect(_saveQuestion(invalidQuestion)).rejects.toEqual(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });
});

describe("_saveQuestionAnswer", () => {
  it("will succeed with correct input data", async () => {
    const validAnswer = {
      authedUser: "sarahedo",
      qid: "vthrdm985a262al8qx3do",
      answer: "optionOne",
    };
    const result = await _saveQuestionAnswer(validAnswer);
    expect(result).toEqual(true);
  });

  it("will throw a rejection error with incorrect input data", async () => {
    const invalidAnswer = {
      authedUser: "",
      qid: "vthrdm985a262al8qx3do",
      answer: "optionOne",
    };
    await expect(_saveQuestionAnswer(invalidAnswer)).rejects.toEqual(
      "Please provide authedUser, qid, and answer"
    );
  });
});
