import { AppDispatch } from "../../index";
import {
  GET_LIST_FAIL,
  GET_LIST_REQUEST,
  GET_LIST_SUCCESS,
  UPDATE_LIST_FAIL,
  UPDATE_LIST_REQUEST,
  UPDATE_LIST_SUCCESS,
} from "../../constants/TabTwo";
import axios from "axios";
import { FORM_APIS } from "../TabOne/data";
import { faker } from "@faker-js/faker";

const config = {
  headers: {
    Authorization: "Bearer ALDJAK23423JKSLAJAF23423J23SAD3",
  },
};
export const listItemsAction = () => async (dispatch: AppDispatch) => {
  try {
    dispatch({ type: GET_LIST_REQUEST });
    // const { data: payload } = await axios.get(FORM_APIS.listURL, config);

    const payload = generateList();
    dispatch({ type: GET_LIST_SUCCESS, payload });
  } catch (e: any) {
    console.log(e);
    dispatch({
      type: GET_LIST_FAIL,
      payload: e.message || "Something went wrong!",
    });
  }
};

export const updateItemsAction = () => async (dispatch: AppDispatch) => {
  try {
    dispatch({ type: UPDATE_LIST_REQUEST });
    // const { data: payload } = await axios.get(FORM_APIS.listURL, config);
    const payload = generateList();
    dispatch({ type: UPDATE_LIST_SUCCESS, payload });
    dispatch({ type: GET_LIST_SUCCESS, payload });
  } catch (e: any) {
    console.log(e);
    dispatch({
      type: UPDATE_LIST_FAIL,
      payload: e.message || "Something went wrong!",
    });
  }
};

const generateList = () => {
  const items: { ID: number; Message: string; Age: number }[] = [];
  for (let a = 0; a < 6; a++) {
    items.push({
      ID: faker.datatype.number(),
      Message: faker.lorem.word(),
      Age: faker.datatype.number(),
    });
  }
  return items;
};
