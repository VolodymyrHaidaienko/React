
import './App.css';
import {useEffect, useState} from "react";
import {getUsers,getUser, getPosts} from "./services/UserServices";

import UsersDetails from "./components/UsersDetails";
import UsersPosts from "./components/UserPosts";


function App() {
let [users,setUsers]=useState([]);
let [user,setUser]=useState(null);
let [userPost, setUserPost]=useState([]);

  useEffect(() => {
    getUsers().then(value => setUsers(value.data));
  },[])

    const chooseUser = (id)=>{
      getUser(id).then(value => setUser(value.data))
    }

    const choosePost=() => {
        getPosts(user.id).then(value => setUserPost(value.data))


    }






  return (
    <div>
        <div className='chooseUser'>
            <div>{user?.name} {user?.username} {user?.email} {user?.phone}</div>
            <div>{user!=null && <button onClick={()=>choosePost()
            } className='ButtonUserDetails'>Post User Details</button>}</div>

        </div>
      <div>{users.map(value => <UsersDetails
          key={value.id}
          id={value.id}
          name={value.name}

          chooseUser={chooseUser}

      />)}
          <div>{userPost.map(value => <UsersPosts key={value.id} id={value.id} userid={value.userId} title={value.title}/>)}</div>

          </div>

    </div>
  );
}

export default App;
