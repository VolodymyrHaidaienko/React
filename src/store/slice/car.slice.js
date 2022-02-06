import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../service/car.Service";
import axios from "axios";




const initialState = {
    cars: [],
    status: null,
    error: null

}



export const getAllCars = createAsyncThunk(
    'cars/getAllCars',
    async (_,{rejectWithValue}) => {
        try {
            const cars = await axios.get('http://91.201.233.14/api/v2/cars').then(value => value.data)
            return cars;
        }catch (e){
            return rejectWithValue(e.message)
        }

    }
)
const carSlice = createSlice({
    name: 'cars',
    initialState,
    reducers: {},
    extraReducers: {
        [getAllCars.pending]: (state) => {
            state.status = 'pending'
            state.error = null


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


