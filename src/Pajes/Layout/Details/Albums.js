import ApiService from "../../../Servies/servies";
import {useEffect, useState} from "react";
import UserComponentAlbums from "../../../components/UserComponentAlbums";
import {Outlet} from "react-router-dom";
import './Albums.css'
import './AlbumsPhotos.css'

export default function Albums() {
    let apiService = new ApiService('albums')
    let [users, setusers] = useState([])
    useEffect(() => {
        apiService.getAllData().then(value => setusers(value))
    }, [])

    return (
        <div className='Albums'>
            <div>
                {
                    users.map(value => <UserComponentAlbums key={value.id} item={value}/>)
                }
            </div>
            <div className='AlbumsPhotos'>
                <Outlet/>
            </div>

        </div>
    )
}