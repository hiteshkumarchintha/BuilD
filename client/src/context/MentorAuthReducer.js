const MentorAuthReducer = (state, action) => {
  switch (action.type) {
    case "MENTOR_LOGIN_START":
      return {
        mentor: null,
        mentorIsFetching: false,
        mentorError: false,
      };
    case "MENTOR_LOGIN_SUCCESS":
      return {
        mentor: action.payload,
        mentorIsFetching: false,
        mentorError: false,
      };
    case "MENTOR_LOGIN_FAILURE":
      return {
        mentor: null,
        mentorIsFetching: false,
        mentorError: action.payload,
      };
    case "MENTOR_LOGOUT":
      return {
        mentor: null,
        mentorIsFetching: false,
        mentorError: false,
      };
    default:
      return state;
  }
};

export default MentorAuthReducer;
