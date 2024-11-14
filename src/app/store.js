import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/Counter/couterSlice'

const rootReducer = {
    // include all of reducers which we having
    counter: counterReducer,

}


const store = configureStore({
    reducers: rootReducer,

})

export default store