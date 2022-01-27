import {Link} from "react-router-dom";

export default function UserComponentAlbums({item}) {
    let {id, title} = item


    return (
        <div>
            {id} {title} <Link to={id + '/photos'} state={{...item}}><button>Click photos</button></Link>

        </div>
    )
}