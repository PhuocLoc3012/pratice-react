import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/Counter/counterSlice'

const rootReducer = {
    // include all of reducers which we having
    count: counterReducer, // đăng kí trên store

}


const store = configureStore({
    reducer: rootReducer,

})

export default store