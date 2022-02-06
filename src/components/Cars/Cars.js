import {useDispatch, useSelector} from "react-redux";
import {Car} from "../Car/Car";
import {useEffect} from "react";
import {getAllCars} from "../../store/slice/car.slice";


const Cars = () => {
    const {cars} = useSelector(state => state.cars)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllCars())
    },[]);



    return (
        <div>
            {
                cars.map(car => <Car key={car.id} cars={car}/>)

            }

        </div>
    )
}
export {Cars};