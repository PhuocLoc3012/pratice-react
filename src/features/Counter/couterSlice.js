
const { createSlice} = require('@reduxjs/toolkit')
const couterSlice = createSlice({

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


const { actions, reducers} = couterSlice
export const { increase, decrease} = actions //name export
export default reducers  // default export
