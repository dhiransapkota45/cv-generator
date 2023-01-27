import { combineReducers } from "redux";
// import signupReducer from "./signup/signupReducer";
import userReducer from "./reducers/userReducer";
const rootReducer = combineReducers({
  userReducer: userReducer,
});

export default rootReducer;
