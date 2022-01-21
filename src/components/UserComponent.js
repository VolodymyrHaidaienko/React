import {Link, useNavigate} from "react-router-dom";


export default function UserComponent({item}) {
    let {id, name} = item;
    let usenavigator = useNavigate()

    return (
        <div>
            <div>
                {id} {name} <Link to={id.toString()} state={{...item}}>Click details</Link>
            </div>
            <div>
                <button onClick={() => usenavigator(id.toString())}>Photo</button>
            </div>

        </div>
    )
}