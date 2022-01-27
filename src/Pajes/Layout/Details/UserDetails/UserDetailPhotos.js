import ApiService from "../../../../Servies/servies";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import UserComponentPhotos from "../../../../components/UserComponentPhotos";


export default function UserDetailPhotos(){
    let apiService = new ApiService('photos');
    let [userphoto, setuserphoto] = useState([]);
    let {id} = useParams()
    useEffect(() => {
        apiService.getSinglPhoto(id).then(value => setuserphoto(value))
    }, [id])

    return(
        <div>
            {
                userphoto.map(value => <UserComponentPhotos key={value.id} item={value}/>)
            }

        </div>
    )
}