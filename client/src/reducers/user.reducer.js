import {
    USER_CREATION_FAIL,
    USER_CREATION_REQUEST,
    USER_CREATION_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT_FAIL,
    USER_LOGOUT_REQUEST,
    USER_LOGOUT_SUCCESS,
} from "../constants/user.constant";

export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return { loading: true };
        case USER_LOGIN_SUCCESS:
            return { loading: false, success: true, userInfo: action.payload };
        case USER_LOGIN_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const userLogoutReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGOUT_REQUEST:
            return { loading: true };
        case USER_LOGOUT_SUCCESS:
            return { loading: false, success: true };
        case USER_LOGOUT_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const userCreationReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_CREATION_REQUEST:
            return { loading: true };
        case USER_CREATION_SUCCESS:
            return { loading: false, userInfo: action.payload };
        case USER_CREATION_FAIL:
            return { loading: false };
        default:
            return state;
    }
};