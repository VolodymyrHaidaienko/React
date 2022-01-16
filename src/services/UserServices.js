import axios from "axios";

let axionIntance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {}
});

const getUsers = ()=>{
    return axionIntance.get('/users')
};

const getUser = (id) => {
  return axionIntance.get('/users/'+ id)
}

const getPosts = (id) => {
    return axionIntance.get('/posts?userId='+id)
}



export {getUsers, getUser, getPosts}




