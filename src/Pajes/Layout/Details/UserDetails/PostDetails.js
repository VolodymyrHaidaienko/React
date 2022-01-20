import {useLocation} from "react-router-dom";


export default function PostDetails(item) {
    let location = useLocation()
    let {state} = location



    return (
        <div>
            {state.id} - {state.title} - {state.body}

        </div>
    )
}