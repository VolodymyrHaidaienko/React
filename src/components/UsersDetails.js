export default function UsersDetails(props){
    let {id,name}=props;




    return(
        <div>
            <h2>{id} - {name}</h2>
            <button onClick={()=>{
                props.chooseUser(id)
            }}>details</button>

        </div>
    );
}