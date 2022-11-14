export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_QUESTION_TO_USER = "ADD_QUESTION_TO_USER";
export const ADD_ANSWER_TO_USER = "ADD_ANSWER_TO_USER";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export function addAnswerToUser(info) {
  return {
    type: ADD_ANSWER_TO_USER,
    authedUser: info.authedUser,
    qid: info.qid,
    answer: info.answer,
  };
}

export function addQuestionToUser(question) {
  return {
    type: ADD_QUESTION_TO_USER,
    id: question.id,
    author: question.author,
  };
}
