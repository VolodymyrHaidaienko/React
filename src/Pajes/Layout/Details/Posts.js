import ApiService from "../../../Servies/servies";
import {useEffect, useState} from "react";
import UserPostsComponent from "../../../components/UserPostsComponent";
import {Outlet} from "react-router-dom";

export default function Posts() {
    let apiservice = new ApiService('posts');
    let [posts, setposts] = useState([])
    useEffect(() => {
        apiservice.getAllData().then(value => setposts(value))
    }, [])
    return (
        <div>
            {
                posts.map(value => <UserPostsComponent
                    key={value.id}
                    id={value.id}
                    item={value}/>)
            }
            <div>
                <Outlet/>
            </div>

        </div>
    )
}