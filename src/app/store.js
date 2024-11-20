import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/Counter/counterSlice'
import userReducer from '../features/Auth/userSlice'
const rootReducer = {
    // include all of reducers which we having
    count: counterReducer, // đăng kí trên store
    user: userReducer,

}


const store = configureStore({
    reducer: rootReducer,

})

export default store