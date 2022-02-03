import {configureStore} from "@reduxjs/toolkit";
import {carReduser} from './car.slice'

const store = configureStore({
    reducer:{
        cars:carReduser
    }
})
export default store