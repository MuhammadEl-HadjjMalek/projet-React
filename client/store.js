import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers, applyMiddleware, createStore } from "redux";
import {
    userCreationReducer,
    userLoginReducer,
    userLogoutReducer,
} from "./src/reducers/user.reducer";
import {
    billDetailsReducer,
    billListReducer,
} from "./src/reducers/bill.reducer";

const reducers = combineReducers({
    userLogin: userLoginReducer,
    userLogout: userLogoutReducer,
    userCreation: userCreationReducer,
    billList: billListReducer,
    billDetails: billDetailsReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo") ?
    JSON.parse(localStorage.getItem("userInfo")) :
    null;

const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
};

const middleware = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(reducers, initialState, middleware);

export default store;