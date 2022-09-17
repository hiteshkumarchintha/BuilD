import axios from "axios";

export const loginCall = async (userCredentials, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post(
      "http://localhost:8800/api/userAuth/login",
      userCredentials
    );
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
  }
};

export const mentorloginCall = async (mentorCredentials, mentorDispatch) => {
  mentorDispatch({ type: "MENTOR_LOGIN_START" });
  try {
    const res = await axios.post(
      "http://localhost:8800/api/mentorAuth/login",
      mentorCredentials
    );
    mentorDispatch({ type: "MENTOR_LOGIN_SUCCESS", payload: res.data });
  } catch (err) {
    mentorDispatch({
      type: "MENTOR_LOGIN_FAILURE",
      payload: err.response.data,
    });
  }
};

export const adminloginCall = async (adminCredentials, adminDispatch) => {
  adminDispatch({ type: "ADMIN_LOGIN_START" });
  try {
    const res = await axios.post(
      "http://localhost:8800/api/adminAuth/login",
      adminCredentials
    );
    adminDispatch({ type: "ADMIN_LOGIN_SUCCESS", payload: res.data });
  } catch (err) {
    adminDispatch({ type: "ADMIN_LOGIN_FAILURE", payload: err.response.data });
  }
};
