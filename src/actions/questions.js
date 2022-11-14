import { saveQuestion } from "../utils/api";
import { saveQuestionAnswer } from "../utils/api";
import { addQuestionToUser } from "../actions/users";
import { addAnswerToUser } from "../actions/users";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_ANSWER = "ADD_ANSWER";

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function handleAddQuestion(optionOneText, optionTwoText, author) {
  return (dispatch) => {
    dispatch(showLoading());

    return saveQuestion({
      optionOneText,
      optionTwoText,
      author,
    })
      .then((question) => {
        dispatch(addQuestion(question));
        dispatch(addQuestionToUser(question));
      })
      .then(() => dispatch(hideLoading()));
  };
}

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

function addAnswer({ qid, authedUser, answer }) {
  return {
    type: ADD_ANSWER,
    qid,
    authedUser,
    answer,
  };
}

export function handleAddAnswer(info) {
  return (dispatch) => {
    dispatch(addAnswer(info));
    dispatch(addAnswerToUser(info));

    return saveQuestionAnswer(info).catch((e) => {
      console.warn("Error in handleAddAnwer: ", e);
      dispatch(addAnswer(info));
      alert("There was an error Adding your vote. Try again.");
    });
  };
}
