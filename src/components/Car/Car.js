const Car = (car) => {
    console.log(car.cars)

    const {id, model, price, year} = car.cars;
    return (
        <div>
            {id} {model} {price} {year}
        </div>
    )
}
export {Car}