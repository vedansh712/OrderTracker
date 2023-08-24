import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import history from "../history/history";

const initalOrder = localStorage.getItem("task")
  ? JSON.parse(localStorage.getItem("task"))
  : null;

const initialState = {
  order: initalOrder,
  allOrders: [],
};

export const orderSlice = createSlice({
  name: "order",
  initialState: initialState,
  reducers: {
    addSuccess: (state, action) => {
      state.order = action.payload;
    },
    addFailure: (state) => {
      return state;
    },
    getSuccess: (state, action) => {
      state.allOrders = action.payload;
    },
    getFailure: (state) => {
      return state;
    },
  },
});

export const { addSuccess, addFailure, getSuccess, getFailure } =
  orderSlice.actions;

export default orderSlice.reducer;

export const addorder = (order) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };
    const response = await axios.post(
      "http://localhost:4000/order/add-order",
      order,
      config
    );

    if (response) {
      localStorage.setItem("order", JSON.stringify(response.data));
      dispatch(addSuccess(response.data));
      history.push("/dashboard");
      window.location.reload();
    } else {
      dispatch(addFailure());
    }
  } catch (error) {
    dispatch(addFailure());
  }
};

export const getallorders = (token, id) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      id,
    },
  };
  console.log("this is the id", id);
  try {
    const response = await axios.get(
      "http://localhost:4000/order/get-order",
      config
    );

    console.log("hey", response);
    if (response) {
      dispatch(getSuccess(response.data));
    }
  } catch (error) {
    if (error.response.status === 400) {
      dispatch(getFailure());
    }
  }
};
