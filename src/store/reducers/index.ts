import { combineReducers } from "@reduxjs/toolkit";
import { formReducer } from "./TabOne";

const reducers = combineReducers({
  health: () => "App is live!",
  form: formReducer,
});

export default reducers;
