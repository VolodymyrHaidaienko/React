
export default function UserComponentPhoto({item}){
    let {id, title}=item

    return(
        <div>
            {id} {title}
        </div>
    )
}