import axios from "axios";
import {
    BILL_DETAILS_FAIL,
    BILL_DETAILS_REQUEST,
    BILL_DETAILS_SUCCESS,
    BILL_LIST_FAIL,
    BILL_LIST_REQUEST,
    BILL_LIST_SUCCESS,
} from "../constants/bill.constant";
import { API_BASE_URL } from "../constants/utils";

export const listBill = () => async(dispatch) => {
    dispatch({ type: BILL_LIST_REQUEST });
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const { data } = await axios.get(`${API_BASE_URL}/api/bills`, config);
        dispatch({ type: BILL_LIST_SUCCESS, payload: data });
    } catch (err) {
        const message =
            err.message && err.response.data.message ?
            err.response.data.message :
            err.message;

        // if (message === "Not authorized, token failed") {
        //     dispatch(logout());
        // }
        dispatch({ type: BILL_LIST_FAIL, payload: message });
    }
};

export const getSingleBill = (id) => async(dispatch) => {
    dispatch({ type: BILL_DETAILS_REQUEST });
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        const { data } = await axios.get(`${API_BASE_URL}/api/bills/${id}`, config);

        dispatch({ type: BILL_DETAILS_SUCCESS, payload: data });
    } catch (err) {
        const message =
            err.message && err.response.data.message ?
            err.response.data.message :
            err.message;

        if (message === "Not authorized, token failed") {
            dispatch(logout());
        }
        dispatch({ type: BILL_DETAILS_FAIL, payload: message });
    }
};