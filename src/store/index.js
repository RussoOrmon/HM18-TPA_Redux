
import { combineReducers, createStore } from "redux";
import { authReducer } from "./auth/authReducer";
import { calculatorReducer } from "./calculator/calculatorReduce";
import { todoReducer } from "./todo/todoReducer";

export const rootReducer = combineReducers({
    calculator: calculatorReducer,
    auth: authReducer,
    todo:todoReducer,
    
})



export const store = createStore(rootReducer);

