import { combineReducers } from "@reduxjs/toolkit";

const reducers = combineReducers({
  health: () => "App is live!",
  test: () => ({ testing: true }),
});
export default reducers;
