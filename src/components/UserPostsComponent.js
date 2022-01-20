import {Link} from "react-router-dom";

export default function UserPostsComponent({item}) {
    let {id, title} = item;

    return (
        <div>
            {id} {title} <Link to={id.toString()} state={{...item}}>click me details</Link>

        </div>
    )
}