export const LoginStart = (userCredentials) => ({
  type: "LOGIN_START",
});

export const LoginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});

export const LoginFailure = () => ({
  type: "LOGIN_FAILURE",
});

export const MentorLoginStart = (mentorCredentials) => ({
  type: "MENTOR_LOGIN_START",
});

export const MentorLoginSuccess = (mentor) => ({
  type: "MENTOR_LOGIN_SUCCESS",
  payload: mentor,
});

export const MentorLoginFailure = () => ({
  type: "MENTOR_LOGIN_FAILURE",
});

export const AdminLoginStart = (adminCredentials) => ({
  type: "ADMIN_LOGIN_START",
});

export const AdminLoginSuccess = (admin) => ({
  type: "ADMIN_LOGIN_SUCCESS",
  payload: admin,
});

export const AdminLoginFailure = () => ({
  type: "ADMIN_LOGIN_FAILURE",
});
