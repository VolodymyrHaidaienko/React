import ApiService from "../../../Servies/servies";
import {useEffect, useState} from "react";
import UserComments from "../../../components/UserComments";

export default function Comments() {
    let apiservice = new ApiService('comments');
    let [comments, setcomments] = useState([])
    useEffect(() => {
        apiservice.getAllData().then(value => setcomments(value))
    }, [])
    return (
        <div>
            {
                comments.map(value => <UserComments
                    key={value.id}
                    id={value.id}
                    name={value.name}
                    email={value.email}/>)
            }

        </div>
    )
}