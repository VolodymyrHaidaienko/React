import {Link} from "react-router-dom";
import './UserComponent.css'


export default function UserComponent({item}) {
    let {id, name} = item;


    return (
        <div className='UserComponent'>
            <div>
                {id} {name} <Link to={id.toString()} state={{...item}}><button>Click details user</button> </Link> <Link to={id +'/albums'} state={{...item}}><button>Click albums</button> </Link>
            </div>

        </div>
    )
}