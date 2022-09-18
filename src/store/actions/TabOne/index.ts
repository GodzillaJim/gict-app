import { useAppDispatch } from "../../hooks";
import { IFormFields } from "../../../screens/HomeScreen/components/TabOne/data";
import {
  SUBMIT_FORM_FAIL,
  SUBMIT_FORM_REQUEST,
  SUBMIT_FORM_SUCCESS,
} from "../../constants/TabOne";
import axios from "axios";
import { FORM_APIS } from "./data";

export const formAction =
  (form: IFormFields) =>
  async (dispatch: ReturnType<typeof useAppDispatch>) => {
    try {
      dispatch({ type: SUBMIT_FORM_REQUEST });
      await axios.post(FORM_APIS.submitForm, form, {
        headers: {
          "Content-Type": "application/json",
          "User-Agent": "PostmanRuntime/7.28.4",
        },
      });
      dispatch({ type: SUBMIT_FORM_SUCCESS });
    } catch (e: any) {
      dispatch({
        type: SUBMIT_FORM_FAIL,
        payload: e.message || "Something went wrong. Try again later!",
      });
    }
  };
