const INITIAL_STATE = {
  isLogged: false,
  token: "",
  user: {},
};

const AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOGIN":
      console.log(action.payload);
      return {
        isLogged: true,
        user: action.payload,
        token: action.payload.message,
      };
    case "REGISTER":
      return {
        isLogged: true,
        token: action.payload,
      };
    case "LOGOUT": {
      console.log("logout");
      return {
        isLogged: false,
        token: "",
        user: {},
      };
    }
    default:
      return state;
  }
};

export default AuthReducer;
