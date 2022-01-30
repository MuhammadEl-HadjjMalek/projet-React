import {
    SET_PAYMENT_MODAL_VISIBILITY_ON,
    SET_PAYMENT_MODAL_VISIBILITY_OFF
} from "../types/tab.type";

export const setPaymentModalVisibility = (isVisible) => async(dispatch) => {
    if (isVisible) {
        dispatch({ type: SET_PAYMENT_MODAL_VISIBILITY_ON });
    } else {
        dispatch({ type: SET_PAYMENT_MODAL_VISIBILITY_OFF });
    }
}