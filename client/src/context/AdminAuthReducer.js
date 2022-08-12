const AdminAuthReducer = (state, action) => {
  console.log(action.payload);
  switch (action.type) {
    case "ADMIN_LOGIN_START":
      return {
        admin: null,
        adminIsFetching: false,
        adminError: false,
      };
    case "ADMIN_LOGIN_SUCCESS":
      return {
        admin: action.payload,
        adminIsFetching: false,
        adminError: false,
      };
    case "ADMIN_LOGIN_FAILURE":
      return {
        admin: null,
        adminIsFetching: false,
        adminError: true,
      };
    case "ADMIN_LOGOUT":
      return {
        admin: null,
        adminIsFetching: false,
        adminError: false,
      };
    default:
      return state;
  }
};

export default AdminAuthReducer;
