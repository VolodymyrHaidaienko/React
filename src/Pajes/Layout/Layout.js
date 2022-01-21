import {Link, Outlet} from "react-router-dom";

export default function Layout() {
    return (
        <div>
            <div>
                <h3>sum menu</h3>
                <ul>
                    <li><Link to={'users'}>user page</Link></li>
                    <li><Link to={'posts'}>post page</Link></li>
                    <li><Link to={'comments'}>comments</Link></li>
                    <li><Link to={'albums'}>albums</Link></li>
                </ul>
            </div>

            <Outlet/>

        </div>
    )
}