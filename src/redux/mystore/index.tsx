import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../feature/counter";

const myStore = configureStore({
    reducer: {
        counter: counterReducer
    }
})

export default myStore;