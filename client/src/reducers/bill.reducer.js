import { BILL_DETAILS_FAIL, BILL_DETAILS_REQUEST, BILL_DETAILS_SUCCESS, BILL_LIST_FAIL, BILL_LIST_REQUEST, BILL_LIST_SUCCESS } from "../constants/bill.constant";


export const billListReducer = (state = {}, action) => {
    switch (action.type) {
        case BILL_LIST_REQUEST:
            return { loading: true };
        case BILL_LIST_SUCCESS:
            return { loading: false, bills: action.payload };
        case BILL_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

export const billDetailsReducer = (state = {}, action) => {
    switch (action.type) {
        case BILL_DETAILS_REQUEST:
            return { loading: true };
        case BILL_DETAILS_SUCCESS:
            return { loading: false, bill: action.payload };
        case BILL_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}