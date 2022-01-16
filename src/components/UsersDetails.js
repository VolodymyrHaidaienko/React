import './UserDetails.css'
export default function UsersDetails(props){

    let {id,name}=props;




    return(
        <div className='UsersDetails'>

            <h2>{id} - {name}</h2>
            <button onClick={()=>{
                props.chooseUser(id)
            }} className='ButtonDetails'>details</button>


        </div>
    );
}