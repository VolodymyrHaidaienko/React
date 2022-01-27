export default function UserDetailAlbum(item) {
    let {item: {id, title}} = item

    return (
        <div>
            {id} {title}
        </div>
    )
}