import { AnyAction } from "@reduxjs/toolkit";
import {
  SUBMIT_FORM_CLEAR,
  SUBMIT_FORM_FAIL,
  SUBMIT_FORM_REQUEST,
  SUBMIT_FORM_SUCCESS,
} from "../../constants/TabOne";

interface IState {
  loading: boolean;
  error: string | null;
  success: boolean;
}

export const formReducer = (
  state: IState = { loading: false, error: null, success: false },
  action: AnyAction
) => {
  switch (action.type) {
    case SUBMIT_FORM_REQUEST:
      return { loading: true, error: null, success: false };
    case SUBMIT_FORM_SUCCESS:
      return { loading: false, error: null, success: true };
    case SUBMIT_FORM_FAIL:
      return { loading: false, error: action.payload, success: false };
    case SUBMIT_FORM_CLEAR:
      return { loading: false, error: null, success: false };
    default:
      return state;
  }
};
