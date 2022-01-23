
export default function UserComponentAlbums({item}){
    let {id, title}=item

    return(
        <div>
            {id} {title}
        </div>
    )
}