export default function ApiService(endpoint) {
    this.getAllData = () => fetch(`https://jsonplaceholder.typicode.com/${endpoint}`)
        .then(value => value.json())

    this.getSinglPosts = (id) => fetch(`https://jsonplaceholder.typicode.com/users/${id}/${endpoint}`)
        .then(value => value.json())

    this.getSinglPhoto = (id) => fetch(`https://jsonplaceholder.typicode.com/albums/${id}/${endpoint}`)
        .then(value => value.json())

}

