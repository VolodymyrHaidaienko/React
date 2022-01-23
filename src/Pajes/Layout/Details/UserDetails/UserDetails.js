import {Link, Outlet, useLocation} from "react-router-dom";

export default function UserDetails() {
    let location = useLocation();
    let {state} = location;


    return (
        <div>
            <div>

                {state.id} - name {state.name} - username {state.username} - email {state.email}
                <Link to={'posts'} state={{...state}}>Click details posts</Link>

            </div>
            <div>
                <Outlet/>
            </div>

        </div>

    )
}