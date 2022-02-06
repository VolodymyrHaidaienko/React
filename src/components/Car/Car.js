const Car = (car) => {

    const {id, model, price, year} = car;
    return (
        <div>
            {id} {model} {price} {year}
        </div>
    )
}
export {Car}