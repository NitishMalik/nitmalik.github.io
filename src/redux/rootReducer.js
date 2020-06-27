import { combineReducers } from "redux";
import { SearchReducer } from "./searchReducer";
import { RoboReducer } from "./roboReducer";

const rootReducer = combineReducers({
  search: SearchReducer,
  robo: RoboReducer,
});

export default rootReducer;
