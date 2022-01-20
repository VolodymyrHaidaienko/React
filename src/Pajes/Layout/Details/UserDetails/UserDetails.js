import {useLocation} from "react-router-dom";

export default function UserDetails(props) {
    let location = useLocation();
    let {state} = location;

    return (
        <div>
            {state.id} {state.name} {state.username} {state.email}
        </div>
    )
}