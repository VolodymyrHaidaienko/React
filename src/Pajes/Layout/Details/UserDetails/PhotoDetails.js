import ApiService from "../../../../Servies/servies";
import {useEffect, useState} from "react";
import {useLocation, useParams} from "react-router-dom";


export default function PhotoDetails(props) {
    let apiservise = new ApiService('albums')
    let [userphoto, setuserphoto] = useState([]);
    let {id} = useParams();

    useEffect(() => {
        apiservise.getSinglPhoto(id).then(value=>console.log(value) )
    },[id]);

    return (
        <div>
            {

            }

        </div>
    )
}