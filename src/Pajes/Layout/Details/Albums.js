import ApiService from "../../../Servies/servies";

import {Outlet} from "react-router-dom";
import {useEffect, useState} from "react";
import UserComponentAlbums from "../../../components/UserComponentAlbums";

export default function Albums(){
    let apiService = new ApiService('albums')
    let [users, setusers] = useState([])
    useEffect(() => {
        apiService.getAllData().then(value => setusers(value))
    }, [])

    return (
        <div>
            {
                users.map(value => <UserComponentAlbums key={value.id} item={value}/>)
            }


            <div>
                <Outlet/>
            </div>


        </div>
    )
}