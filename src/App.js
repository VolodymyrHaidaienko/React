import './App.css';
import {Link, Routes, Route, Outlet} from "react-router-dom";
import Layout from "./Pajes/Layout/Layout";
import Users from "./Pajes/Layout/Details/Users";
import Posts from "./Pajes/Layout/Details/Posts";
import Comments from "./Pajes/Layout/Details/Comments";
import UserDetails from "./Pajes/Layout/Details/UserDetails/UserDetails";
import PostDetails from "./Pajes/Layout/Details/UserDetails/PostDetails";
import Albums from "./Pajes/Layout/Details/Albums";
import PostPageUser from "./Pajes/Layout/Details/UserDetails/PostPageUser";
import UserDetailAlbum from "./Pajes/Layout/Details/UserDetails/UserDetailAlbum";
import UserAlbum from "./components/UserAlbum";


function App() {
    return (
        <div className='AllContent'>
            <div className='Menu'>
                <div><h2>Menu</h2></div>
                <button><Link to={'/layout'}>Click menu</Link></button>
            </div>
            <h2>content</h2>

            <Routes>

                <Route path={'/layout'} element={<Layout/>}>

                    <Route path={'users'} element={<Users/>}>
                        <Route path={':id'} element={<UserDetails/>}>
                            <Route path={':posts'} element={<PostPageUser/>}/>
                            <Route path={'albums'} element={<UserAlbum/>}/>
                        </Route>
                    </Route>

                    <Route path={'albums'} element={<Albums/>}/>


                    <Route path={'posts'} element={<Posts/>}>
                        <Route path={':id'} element={<PostDetails/>}/>
                    </Route>

                    <Route path={'comments'} element={<Comments/>}/>
                </Route>

            </Routes>
            <div className='SubMenu'>
                <Outlet/>
            </div>
        </div>

    );
}


export default App;
