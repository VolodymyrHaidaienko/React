import ApiService from "../../../Servies/servies";
import {useEffect, useState} from "react";


import UserComponent from "../../../components/UserComponent";
import {Outlet} from "react-router-dom";


export default function Users() {
    let apiService = new ApiService('users')
    let [users, setusers] = useState([])
    useEffect(() => {
        apiService.getAllData().then(value => setusers(value))
    }, [])

    return (
        <div>
            {
                users.map(value => <UserComponent key={value.id} item={value}/>)
            }

            <div>
                <Outlet/>
            </div>


        </div>
    )
}