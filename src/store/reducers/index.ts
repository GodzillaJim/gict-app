import { combineReducers } from "@reduxjs/toolkit";
import { formReducer } from "./TabOne";
import { itemsReducer, updateItemsReducer } from "./TabTwo";

const reducers = combineReducers({
  health: () => "App is live!",
  form: formReducer,
  items: itemsReducer,
  updateItems: updateItemsReducer,
});

export default reducers;
