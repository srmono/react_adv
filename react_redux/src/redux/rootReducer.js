import { combineReducers } from "redux";
import cakeReducer from "./cakes/cakeReducers";
import cookieReducer from "./cookie/cookieReducer";
import userReducer from './user/userReducer'; 

const rootReducer = combineReducers({
    cake: cakeReducer,
    cookie: cookieReducer,
    user: userReducer
})

export default rootReducer;