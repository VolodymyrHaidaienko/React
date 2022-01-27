import ApiService from "../Servies/servies";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import UserDetailAlbum from "../Pajes/Layout/Details/UserDetails/UserDetailAlbum";

export default function UserAlbum() {
    let apiService = new ApiService('albums');
    let [useralbums, setuseralbums] = useState([]);
    let {id} = useParams()
    useEffect(() => {
        apiService.getSinglPosts(id).then(value => setuseralbums(value))
    }, [id])
    return (
        <div>
            {
                useralbums.map(value => <UserDetailAlbum key={value.id} item={value}/>)
            }
        </div>
    )
}