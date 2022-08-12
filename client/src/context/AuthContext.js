import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";
import MentorAuthReducer from "./MentorAuthReducer";
import AdminAuthReducer from "./AdminAuthReducer";

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")),
  isFetching: false,
  error: false,
};

const MENTOR_INITIAL_STATE = {
  mentor: JSON.parse(localStorage.getItem("mentor")),
  mentorIsFetching: false,
  mentorError: false,
};

const ADMIN_INITIAL_STATE = {
  admin: JSON.parse(localStorage.getItem("admin")),
  adminIsFetching: false,
  adminError: false,
};

export const AuthContext = createContext({});

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  const [mentorState, mentorDispatch] = useReducer(
    MentorAuthReducer,
    MENTOR_INITIAL_STATE
  );
  const [adminState, adminDispatch] = useReducer(
    AdminAuthReducer,
    ADMIN_INITIAL_STATE
  );

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  useEffect(() => {
    localStorage.setItem("mentor", JSON.stringify(mentorState.mentor));
  }, [mentorState.mentor]);

  useEffect(() => {
    localStorage.setItem("admin", JSON.stringify(adminState.admin));
  }, [adminState.admin]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        mentor: mentorState.mentor,
        mentorIsFetching: mentorState.mentorIsFetching,
        mentorError: mentorState.mentorError,
        admin: adminState.admin,
        adminIsFetching: adminState.adminIsFetching,
        adminError: adminState.adminError,
        dispatch,
        mentorDispatch,
        adminDispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// export const MentorAuthContextProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(AuthReducer, MENTOR_INITIAL_STATE);

//   return (
//     <MentorAuthContext.Provider
//       value={{
//         mentor: state.mentor,
//         isFetching: state.isFetching,
//         error: state.error,
//         dispatch,
//       }}
//     >
//       {children}
//     </MentorAuthContext.Provider>
//   );
// };
