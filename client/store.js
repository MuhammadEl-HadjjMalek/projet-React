import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers, applyMiddleware, createStore } from "redux";
import { tabModalVisibilityReducer } from "./src/reducers/tab.reducer";
// import AsyncStorage from '@react-native-async-storage/async-storage';


const reducers = combineReducers({
    tabModalVisibility: tabModalVisibilityReducer,
});

const initialState = {};

const middleware = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(reducers, initialState, middleware);

export default store;