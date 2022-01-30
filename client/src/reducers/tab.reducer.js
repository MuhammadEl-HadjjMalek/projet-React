import {
    SET_PAYMENT_MODAL_VISIBILITY_ON,
    SET_PAYMENT_MODAL_VISIBILITY_OFF
} from "../types/tab.type";

export const tabModalVisibilityReducer = (state = null, action) => {
    switch (action.type) {
        case SET_PAYMENT_MODAL_VISIBILITY_ON:
            return { visibility: true }
        case SET_PAYMENT_MODAL_VISIBILITY_OFF:
            return { visibility: false }
        default:
            {
                return { state }
            }
    }
}