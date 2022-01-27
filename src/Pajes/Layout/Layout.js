import {Link, Outlet} from "react-router-dom";
import './Details/UserDetails/Layout.css'

export default function Layout() {
    return (
        <div>
            <div className='Submenu'>
                <h3>sum menu</h3>
                <ul>
                    <li><Link to={'users'}><button>user page</button></Link></li>
                    <li><Link to={'posts'}><button>post page</button></Link></li>
                    <li><Link to={'comments'}><button>comments</button></Link></li>
                    <li><Link to={'albums'}><button>albums</button></Link></li>
                </ul>
            </div>

            <Outlet/>

        </div>
    )
}