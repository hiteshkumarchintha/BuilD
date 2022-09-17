export const LoginStart = (userCredentials) => ({
  type: "LOGIN_START",
});

export const LoginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});

export const LoginFailure = (error) => ({
  type: "LOGIN_FAILURE",
  payload: error,
});

export const MentorLoginStart = (mentorCredentials) => ({
  type: "MENTOR_LOGIN_START",
});

export const MentorLoginSuccess = (mentor) => ({
  type: "MENTOR_LOGIN_SUCCESS",
  payload: mentor,
});

export const MentorLoginFailure = (error) => ({
  type: "MENTOR_LOGIN_FAILURE",
  payload: error,
});

export const AdminLoginStart = (adminCredentials) => ({
  type: "ADMIN_LOGIN_START",
});

export const AdminLoginSuccess = (admin) => ({
  type: "ADMIN_LOGIN_SUCCESS",
  payload: admin,
});

export const AdminLoginFailure = (error) => ({
  type: "ADMIN_LOGIN_FAILURE",
  payload: error,
});
