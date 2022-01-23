import ApiService from "../../../../Servies/servies";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import UserSum from "./UserSum";


export default function PostPageUser() {
    let apiservice = new ApiService('posts');
    let [post, setposts] = useState([])
    let {id} = useParams()
    useEffect(() => {
        apiservice.getSinglPosts(id).then(value => setposts(value))
    }, []);

    return (
        <div>
            {
                post.map(value => <UserSum key={value.id} item={value}/>)
            }

        </div>
    )
}