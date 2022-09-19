import { IFormFields } from "../../../screens/HomeScreen/components/TabOne/data";
import {
  SUBMIT_FORM_FAIL,
  SUBMIT_FORM_REQUEST,
  SUBMIT_FORM_SUCCESS,
} from "../../constants/TabOne";
import axios from "axios";
import { FORM_APIS } from "./data";
import { AppDispatch } from "../../index";

export const formAction =
  (form: IFormFields) => async (dispatch: AppDispatch) => {
    try {
      dispatch({ type: SUBMIT_FORM_REQUEST });
      await axios.post(FORM_APIS.submitForm, form);
      dispatch({ type: SUBMIT_FORM_SUCCESS });
    } catch (e: any) {
      dispatch({
        type: SUBMIT_FORM_FAIL,
        payload:
          e.response.data?.Message ||
          e.message ||
          "Something went wrong. Try again later!",
      });
    }
  };
