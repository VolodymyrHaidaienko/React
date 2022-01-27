export default function UserComponentPhotos(item) {
    let {item: {id, title, thumbnailUrl}} = item


    return (
        <div>
            {id} {title} <img src={thumbnailUrl}/>
        </div>
    )
}