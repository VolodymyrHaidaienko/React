const Car = (car) => {
    const {id, model, year, price} = car.cars;
    return (
        <div>
            {id} {model} {year} {price}
        </div>
    )
}
export {Car}