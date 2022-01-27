import {Link, Outlet, useLocation} from "react-router-dom";
import './Layout.css'
export default function UserDetails() {
    let location = useLocation();
    let {state} = location;


    return (
        <div className='UserDetails'>
            <div>

                {state.id} - name {state.name} - username {state.username} - email {state.email}  <Link to={'posts'} state={{...state}}><button>Click details posts</button></Link>


            </div>
            <div>
                <Outlet/>
            </div>

        </div>

    )
}