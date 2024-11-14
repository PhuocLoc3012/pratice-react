
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({

    name: 'counter',
    initialState: 0, //giá trị khởi tạo
    reducers: {
        increase(state, action){
            return state + 1
        },
        decrease(state, action){
            return state - 1
        },

    }

})


const { actions, reducer} = counterSlice //này nó tạo sẵn
export const { increase, decrease} = actions //name export, các hàm này được setup sẵn để tạo ra actions
export default reducer  // default export
