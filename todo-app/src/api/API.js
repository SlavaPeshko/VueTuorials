import axios from 'axios';

export default {
  getTodos() {
    return axios.get('https://jsonplaceholder.typicode.com/todos')
    .then((response) => Promise.resolve(response.data))
    .catch((error) => Promise.reject(error));
  },
  deleteTodo(id) {
    return axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then((response) => Promise.resolve(response.data))
    .catch((error) => Promise.reject(error));
  },
  createTodo(newTodo) {
    return axios.post('https://jsonplaceholder.typicode.com/todos', {
      body: newTodo,
    })
    .then((response) => Promise.resolve(response.data))
    .catch((error) => Promise.reject(error));
  },
};
// delete: ({ id }) => axios.delete(`${url}/${id}`),
// const get = function() {
//   return axios.get('https://jsonplaceholder.typicode.com/todos')
//   .then(response => response.data)
//   .catch((e) => {
//     console.log(e);
//   });
// };

// const postTodo = function (url, request) {
//   return axios.post(url, request)
//   .then((response) => Promise.resolve(response))
//   .catch((error) => Promise.reject(error));
// };

// const deleteTodo = function (url, request) {
//   return axios.delete(url, request)
//   .then((response) => Promise.resolve(response))
//   .catch((error) => Promise.reject(error));
// };

// const putTodo = function (url, request) {
//   return axios.put(url, request)
//   .then((response) => Promise.resolve(response))
//   .catch((error) => Promise.reject(error));
// };

// export default{
//   get,
//   postTodo,
//   deleteTodo,
//   putTodo,
// };

// const getAll = () => axios.get(url);
// const update = toUpdate => axios.put(url, toUpdate);
// const create = toCreate => axios.create(url, toCreate);

// export default {
//   posts(url) {
//     return {
//       getAll: () => axios.get(url),
//       update: toUpdate => axios.put(url, toUpdate),
//       create: toCreate => axios.put(url, toCreate),
//       delete: ({ id }) => axios.delete(`${url}/${id}`),
//     };
//   },
// };
