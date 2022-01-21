import {useLocation} from "react-router-dom";

export default function UserDetails(props) {

    let location = useLocation();

    let {state} = location;

    return (
        <div>
            <div>
                {state.id} - name {state.name} - username {state.username} - email {state.email}
            </div>
        </div>

    )
}