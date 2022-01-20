import './App.css';
import {Link, Routes, Route, Outlet} from "react-router-dom";

import Home from "./Pajes/Home/Home";
import Layout from "./Pajes/Layout/Layout";
import Users from "./Pajes/Layout/Details/Users";
import Posts from "./Pajes/Layout/Details/Posts";
import Comments from "./Pajes/Layout/Details/Comments";
import UserDetails from "./Pajes/Layout/Details/UserDetails/UserDetails";
import PostDetails from "./Pajes/Layout/Details/UserDetails/PostDetails";

function App() {
    return (
        <div>
            <div>
                <div>Menu</div>
                <ul>
                    <button><Link to={'/home'}>home</Link></button>
                    <button><Link to={'/layout'}>layout</Link></button>

                </ul>
            </div>
            <h2>content</h2>

            <Routes>
                <Route path={'/home'} element={<Home/>}/>
                <Route path={'/layout'} element={<Layout/>}>
                    <Route path={'users'} element={<Users/>}>
                        <Route path={':id'} element={<UserDetails/>}/>
                    </Route>

                    <Route path={'posts'} element={<Posts/>}>
                        <Route path={':id'} element={<PostDetails/>}/>
                    </Route>
                    <Route path={'comments'} element={<Comments/>}/>
                </Route>

            </Routes>
            <div>
                <Outlet/>
            </div>
        </div>

    );
}


export default App;
