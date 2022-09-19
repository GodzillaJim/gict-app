import { IITem } from "../../../screens/HomeScreen/components/TabTwo";
import { AnyAction } from "@reduxjs/toolkit";
import {
  GET_LIST_CLEAR,
  GET_LIST_FAIL,
  GET_LIST_REQUEST,
  GET_LIST_SUCCESS,
  UPDATE_LIST_FAIL,
  UPDATE_LIST_REQUEST,
  UPDATE_LIST_SUCCESS,
} from "../../constants/TabTwo";

interface IState {
  loading: boolean;
  error: string | null;
  items: IITem | null;
}

export const itemsReducer = (
  state: IState = { loading: false, error: null, items: null },
  action: AnyAction
) => {
  switch (action.type) {
    case GET_LIST_REQUEST:
      return { loading: true, error: null, items: null };
    case GET_LIST_SUCCESS:
      return { loading: false, error: null, items: action.payload };
    case GET_LIST_FAIL:
      return { loading: false, error: action.payload, items: null };
    case GET_LIST_CLEAR:
      return { loading: false, error: null, items: null };
    default:
      return state;
  }
};

export const updateItemsReducer = (
  state: IState = { loading: false, error: null, items: null },
  action: AnyAction
) => {
  switch (action.type) {
    case UPDATE_LIST_REQUEST:
      return { loading: true, error: null, items: null };
    case UPDATE_LIST_SUCCESS:
      return { loading: false, error: null, items: action.payload };
    case UPDATE_LIST_FAIL:
      return { loading: false, error: action.payload, items: null };
    default:
      return state;
  }
};
