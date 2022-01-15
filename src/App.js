
import './App.css';
import {useEffect, useState} from "react";
import {getUsers,getUser} from "./services/UserServices";

import UsersDetails from "./components/UsersDetails";


function App() {
let [users,setUsers]=useState([]);
let [user,setUser]=useState(null);

  useEffect(() => {
    getUsers().then(value => setUsers(value.data));
  },[])

    const chooseUser = (id)=>{
      getUser(id).then(value => setUser(value.data))
    }






  return (
    <div>
        <div>
            <div>{user?.name} {user?.username} {user?.email}</div>
            <div>{user!=null && <button onClick={()=>{
            }}>Clear</button>}</div>

        </div>
      <div>{users.map(value => <UsersDetails
          key={value.id}
          id={value.id}
          name={value.name}

          chooseUser={chooseUser}

      />)}
          </div>

    </div>
  );
}

export default App;
