import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../service/car.Service";




const initialState = {
    cars: [],
    // status: null,
    // error: null
}


export const getAllCars = createAsyncThunk(
    'cars/getAllCars',
    async (_, {rejectWithValue}) => {
        const cars = await carService.getAll();
        return cars;
    }
)
const carSlice = createSlice({
    name: 'cars',
    initialState,
    reducers: {},
    extraReducers: {
        [getAllCars.pending]: (state) => {
            // state.status = 'pending'
            // state.error = null

        },
        [getAllCars.fulfilled]: (state, action) => {
            state.cars = action.payload
        },
        [getAllCars.rejected]: (state, action) => {

        },
    }
})
const carReduser = carSlice.reducer;
export default carReduser;


